class Users {
    static lastId = 0;
    constructor(firstName, lastName, email, password, phone, status) {
        if (status === 'ACTIVE' || status === 'BLOCKED') {
            const now = new Date().toISOString();
            Users.lastId++;
            this.id = Users.lastId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.phone = phone;
            this.status = status;
            this.createdAt = now;
            this.updatedAt = now;
        } else {
            console.log(`[ERROR] Không thể tạo Users: '${status} không hợp lệ.`);
        }
    }
}

class Role {
    constructor(id, roleName) {
        if (roleName === 'ROLE_ADMIN' || roleName === 'ROLE_USER') {
            this.id = id;
            this.roleName = roleName;
        } else {
            console.log(`[WARNING] Không thể tạo Role: '${roleName}' không hợp lệ.`);
        }
    }
}
class UserRole {
    constructor(user, role) {
        if (user instanceof Users && role instanceof Role) {
            this.userId = user.id;
            this.roleId = role.id;
        } else {
            console.log(`[WARNING] Không thể tạo UserRole: user hoặc role không hợp lệ.`);
        }
    }
}
class Station {
    static lastIdStation = 0;
    constructor(name, image, wallpaper, descriptions, location) {
        const now = new Date().toISOString();
        Station.lastIdStation++;
        this.id = Station.lastIdStation;
        this.name = name;
        this.image = image;
        this.wallpaper = wallpaper;
        this.descriptions = descriptions;
        this.location = location;
        this.createdAt = now;
        this.updatedAt = now;
    }
}
class BusCompany {
    static lastIdBusCompany = 0;
    constructor(id, companyName, image, descriptions) {
        BusCompany.lastIdBusCompany++;
        const now = new Date().toISOString();
        this.id = BusCompany.lastIdBusCompany;
        this.companyName = companyName;
        this.image = image;
        this.descriptions = descriptions;
        this.createdAt = now;
        this.updatedAt = now;
    }
}

class Buses {
    static lastIdBuses = 0;
    constructor(name, description, licensePlate, capacity, companyId, createdAt, updatedAt) {
        Buses.lastIdBuses++;
        this.id = Buses.lastIdBuses;
        this.name = name;
        this.description = description;
        this.licensePlate = licensePlate;
        this.capacity = capacity;
        this.companyId = companyId;
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}

class BusStation {
    constructor(station, bus) { //truyền vào 2 đối tượng station và bus
        if (station instanceof Station && bus instanceof Buses) {
            this.stationId = station.id;
            this.busId = bus.id;
        } else {
            console.log(`[WARNING] Không thể tạo BusStation: station hoặc bus không hợp lệ.`);
        }
    }
}

class BusImage {
    static lastIdBusImage = 0;
    constructor(imageUrl, bus) {
        if (bus instanceof Buses) {
            BusImage.lastIdBusImage++;
            this.id = BusImage.lastIdBusImage;
            this.imageUrl = imageUrl;
            this.busId = bus.id;
        } else {
            console.log(`[WARNING] Không thể tạo BusImage: Bus không hợp lệ.`);
        }
    }
}

class Routes {
    static lastIdRoute = 0;
    constructor(departureStation, arrivalStation, price, duration, distance) {
        if (departureStation instanceof Station && arrivalStation instanceof Station) {
            Routes.lastIdRoute++;
            this.id = Routes.lastIdRoute;
            this.departureStationId = departureStation.id;
            this.arrivalStationId = arrivalStation.id;
            this.price = price;
            this.duration = duration;
            this.distance = distance;
            this.createdAt = new Date().toISOString();
            this.updatedAt = new Date().toISOString();
        } else {
            console.log(`[WARNING] Không thể tạo Route: departureStation hoặc arrivalStation không hợp lệ.`);
        }
    }
}

class Schedules {
    static lastIdTrip = 0;
    constructor(route, bus, departureTime, arrivalTime, availableSeats, totalSeats, status) {
        if (status === 'AVAILABLE' || status === 'FULL' || status === 'CANCELLED') {
            if (bus instanceof Buses && route instanceof Routes) {
                Schedules.lastIdTrip++;
                this.id = Schedules.lastIdTrip;
                this.routeId = route.id;
                this.busId = bus.id;
                this.departureTime = departureTime;
                this.arrivalTime = arrivalTime;
                this.availableSeats = availableSeats;
                this.totalSeats = totalSeats;
                this.status = status;
                this.createdAt = new Date().toISOString();
                this.updatedAt = new Date().toISOString();
            } else {
                console.log(`[WARNING] Không thể tạo Schedule: Bus hoặc Route không hợp lệ.`);
            }
        } else {
            console.log('[WARNING] Không thể tạo Schedule: Status không hợp lệ.');
        }
    }
}

class Seat {
    static lastIdSeat = 0;
    constructor(bus, seatNumber, seatType, status, createdAt, updatedAt) {
        if (seatType === 'LUXURY' || seatType === 'VIP' || seatType === 'STANDARD') {
            if (bus instanceof Buses) {
                Seat.lastIdSeat++;
                this.id = Seat.lastIdSeat;
                this.busId = bus.id;
                this.seatNumber = seatNumber; // vd: A1, A2, A3,...
                this.seatType = seatType;
                this.status = status;
                if (seatType === 'LUXURY') {
                    this.priceForTypeSeat = 100000;
                } else if (seatType === 'VIP') {
                    this.priceForTypeSeat = 50000;
                } else {
                    this.priceForTypeSeat = 0;
                }
                this.createdAt = createdAt;
                this.updatedAt = updatedAt;
            } else {
                console.log('[WARNING] Không thể tạo Seat : Bus không hợp lệ.');
            }
        } else {
            console.log('[WARNING] Không thể tạo Seat: seatType không hợp lệ.');
        }
    }
}

class BusReview {
    static lastId = 0;

    constructor(user, bus, rating, review) {
        if (!(user instanceof Users)) {
            console.log("[ERROR] Không thể tạo BusReview: user không hợp lệ.");
            return;
        }

        if (!(bus instanceof Buses)) {
            console.log("[ERROR] Không thể tạo BusReview: bus không hợp lệ.");
            return;
        }

        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            console.log("[ERROR] Rating phải là số từ 1 đến 5.");
            return;
        }

        BusReview.lastId++;
        const now = new Date().toISOString();

        this.id = BusReview.lastId;
        this.userId = user.id;
        this.busId = bus.id;
        this.rating = rating;
        this.review = review || "";
        this.createdAt = now;
        this.updatedAt = now;
    }
}

class Tickets {
    static lastId = 0;

    constructor(schedule, seat, price, status) {
        const validStatuses = ['BOOKED', 'CANCELLED'];

        if (!validStatuses.includes(status)) {
            console.log('[WARNING] Không thể tạo Ticket: status không hợp lệ.');
            return;
        }

        if (!(schedule instanceof Schedules)) {
            console.log('[WARNING] Không thể tạo Ticket: schedule không hợp lệ.');
            return;
        }
        if (!(seat instanceof Seat)) {
            console.log('[WARNING] Không thể tạo Ticket: Seat không hợp lệ.');
            return;
        }

        Tickets.lastId++;
        this.id = Tickets.lastId;
        this.scheduleId = schedule.id;
        this.seatId = seat.id;
        this.departureTime = schedule.departureTime;
        this.arrivalTime = schedule.arrivalTime;
        this.seatType = seat.seatType;
        this.price = price;
        this.status = status;
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}

class Banner {
    static lastId = 0;

    constructor(bannerUrl, position) {
        if (typeof bannerUrl !== 'string' || typeof position !== 'string') {
            console.log('[WARNING] Không thể tạo Banner: banner_url hoặc position không hợp lệ.');
            return;
        }

        Banner.lastId++;
        this.id = Banner.lastId;
        this.bannerUrl = bannerUrl;
        this.position = position;
    }
}

class CancellationPolicy {
    static lastId = 0;

    constructor(description, route, cancellationTimeLimit, refundPercentage) {
        if (!(route instanceof Routes)) {
            console.log('[WARNING] Không thể tạo CancellationPolicy: route không hợp lệ.');
            return;
        }

        if (
            typeof description !== 'string' ||
            typeof cancellationTimeLimit !== 'number' ||
            typeof refundPercentage !== 'number'
        ) {
            console.log('[WARNING] Không thể tạo CancellationPolicy: Kiểu dữ liệu không hợp lệ.');
            return;
        }

        CancellationPolicy.lastId++;
        this.id = CancellationPolicy.lastId;
        this.description = description;
        this.routeId = route.id;
        this.cancellationTimeLimit = cancellationTimeLimit;
        this.refundPercentage = refundPercentage;
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}
