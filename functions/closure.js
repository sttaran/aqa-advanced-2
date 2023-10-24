// function makeCounter(){
//     let i = "|-"
//     return function (){
//         i += "|-"
//         console.log(i)
//     }
// }
//
// const counter = makeCounter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
//
// console.log("take a break")
// const counter2 = makeCounter()
// counter2()
// counter()

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2)

console.log(double(2))
console.log(double(3))
console.log(double(5))