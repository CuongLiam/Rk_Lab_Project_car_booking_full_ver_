let users = JSON.parse(localStorage.getItem("users")) || [];

const submit = document.getElementById("submit");
const swapPageLogin = document.getElementById("swapPageLogin");
const verificationModal = new bootstrap.Modal(document.getElementById('verification'));
let verificationCode = ""; // Mã xác nhận sẽ được tạo ngẫu nhiên
//Các thành phần trong trang cần chuyển đổi
let please = document.getElementById("please");
let information = document.getElementById("information");
let changePage = document.getElementById("changePage");
let rememberArea = document.getElementById("remember-area");
let errorNotice = document.getElementById("error-notice")
let successNotice = document.getElementById("success-notice");

//Xem Người dùng có dùng tính năng Remember me không
// Khi tải trang, kiểm tra xem có thông tin currUser trong localStorage không
window.addEventListener("load", function () {
    const currUser = JSON.parse(localStorage.getItem("currUser"));
    if (currUser) {
        document.getElementById("email").value = currUser.email || "";
        document.getElementById("password").value = currUser.password || "";
        document.getElementById("exampleCheck1").checked = true; // Đánh dấu checkbox "Remember me"
    }
});
//Đăng nhập + Đăng ký
submit.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("exampleCheck1").checked;

    if (please.innerText == "Please sign in") {
        const user = users.find(account => account.email === email && account.password === password);
        if (user) {
            // Nếu chọn "Remember me", lưu thông tin vào localStorage
            if (rememberMe) {
                localStorage.setItem("currUser", JSON.stringify({ email, password }));
            } else {
                localStorage.removeItem("currUser");
            }
            sessionStorage.setItem("loginSuccess", "true")
            //Kiểm tra quyền
            if (user.role === "ADMIN") {
                location.href = "../pages/admin/dashboard.html"
            } else {
                location.href = "../pages/home-page.html"
                localStorage.setItem("activeNavLinkHref", "./home-page.html")
                // localStorage.setItem("loggedUser", user.email)
                localStorage.setItem("loggedUser", JSON.stringify({ email: user.email }));
            }

        } else {
            if (email == "") {
                errorNotice.innerText = "Email không được để trống"
            } else if (password == "") {
                errorNotice.innerText = "Password không được để trống"
            } else {
                errorNotice.innerText = "Email hoặc mật khẩu không tồn tại"
            }
        }
        //Show Error Toast
        const toastEl = document.getElementById('errorToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    } else {
        let phone = document.getElementById("phone").value.trim();
        let flag = true;
        const emailExists = users.some(account => account.email === email);

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPhone = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;
        if (!regexEmail.test(email)) {
            errorNotice.innerText = "Email không hợp lệ";
        } else if (emailExists) {
            errorNotice.innerText = "Email đã tồn tại. Vui lòng sử dụng email khác.";
        } else if (!regexPhone.test(phone)) {
            errorNotice.innerText = "Số điện thoại không hợp lệ";
        } else if (password == "") {
            errorNotice.innerText = "Password không được để trống"
        } else if (password.length < 8) {
            errorNotice.innerText = "Password phải có tối thiểu 8 kí tự"
        }
        else {
            flag = false
            emailjs.init("SJ-bBFXNhG0NfyaAg");
            verificationModal.show();
            document.getElementById("confirmCode").value = "";

            // Tạo mã xác nhận 6 chữ số
            verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

            // Gửi mã xác nhận qua email
            const templateParams = {
                email,
                code: verificationCode
            };

            emailjs.send("service_rt0q3ti", "template_fxdfybn", templateParams)
                .then(() => {
                    successNotice.innerText = `Đã gửi mã xác nhận tới email: ${email}`;
                    //Show Succsess Toast
                    const toastEl = document.getElementById('successToast');
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                    document.getElementById("verification").style.display = "block";
                }, (error) => {
                    console.log("Lỗi gửi email: " + error.text);
                    errorNotice.innerText = "Lỗi gửi email: " + error.text;
                    //Show Error Toast
                    const toastEl = document.getElementById('errorToast');
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                });

            document.getElementById("submitVerificationCode").addEventListener("click", function (e) {
                e.preventDefault();
                const userCode = document.getElementById("confirmCode").value;
                if (userCode === verificationCode) {
                    // Thực hiện lưu dữ liệu đăng ký
                    let id = users.length + 1
                    const user = {
                        id,
                        email,
                        phone,
                        password,
                        role: "USER"
                    }
                    verificationModal.hide()
                    successNotice.innerText = "Đăng ký thành công"
                    const toastEl = document.getElementById('successToast');
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                    users = [...users, user]
                    localStorage.setItem("users", JSON.stringify(users));
                    document.getElementById("swapPageLogin").click();
                } else {
                    errorNotice.innerText = "Mã xác nhận không chính xác"
                    const toastEl = document.getElementById('errorToast');
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }
            })
        }
    }
    if (flag) {
        //Show Error Toast
        const toastEl = document.getElementById('errorToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
})
//Đổi trang đăng ký/ Đăng nhập
changePage.addEventListener("click", function (e) { //Gán sự kiến cho phần tử cha target vào phần tử con để không cần gán lại sự kiện chuyển trangtrang
    e.preventDefault();
    if (e.target.id === "swapPageLogin") {
        if (please.innerText == "Please sign in") { //Từ trang đăng nhập đổi sang đăng ký
            please.innerText = "Please sign up";
            information.innerHTML = `<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                    <input type="text" class="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Phone">
                    <input type="password" class="form-control" id="password" placeholder="Password">`
            rememberArea.style.display = "none";
            changePage.innerHTML = `Already have an account, <a id="swapPageLogin" href="#">click here</a>`
            submit.innerText = "Sign up";
        } else { //Từ đăng ký sang đăng nhập
            please.innerText = "Please sign in";
            information.innerHTML = `<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                    <input type="password" class="form-control" id="password" placeholder="Password">`
            rememberArea.style.display = "block";
            changePage.innerHTML = `Don't have an account, <a id="swapPageLogin" href="#">click here</a>`
            submit.innerText = "Sign in"
        }
    }
})
