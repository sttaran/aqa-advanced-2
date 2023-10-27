const car = {
    brand: "Audi",
    model: "A6",
    drive: function (speed = 60){
        console.log(`${this.brand} ${this.model} driving with speed ${speed} km/h`)
    }
}

car.drive()
car.drive(120)