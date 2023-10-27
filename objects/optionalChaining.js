const car = {
    brand: "Audi",
    model: "A6",
    actions: {
        drive: function (speed = 60){
            console.log(`Audi driving with speed ${speed} km/h`)
        }
    },
    additionalData: {
        maxSpeed: 320
    }
}

const car2 = {
    brand: "Renault",
    model: "Megan",
    drive: function (speed = 60){
        console.log(`Renault driving with speed ${speed} km/h`)
    }
}

const cars = [car, car2]
console.log(cars)

for (const carItem of cars) {
   // carItem.actions?.drive()
    console.log(carItem.additionalData?.maxSpeed)
}