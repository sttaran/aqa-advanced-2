// console.log(false || 1)
// console.log("false" || 1)
// console.log(true || 1)

// console.log(null || 1)
// console.log(null ?? 1)

// console.log(0 || 1)

// null undefined
// console.log(false ?? 1)


// console.log(0 || false)

// const car = {
//     brand: "Audi",
//     model: "A6"
// }
//
// const car2 = {
//     brand: "Renault"
// }
//
// const cars = [car, car2]
//
// for (const carItem of cars){
//     const model = carItem.model ?? "Unknown model"
//     console.log(model)
// }

const defaultUserName = "Anonymous"

const user = {
    name: "Stanislav"
}

console.log(user.username ?? defaultUserName)
