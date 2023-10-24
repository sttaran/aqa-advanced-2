//
// function foo(callback){
//     console.log("Before callback")
//     callback()
//     console.log("After callback")
// }
//
// function sayHello(){
//     console.log("Hello")
// }
//
// foo(sayHello)
// console.log('------------------------------')
// foo(function () {
//     console.log("HI!!!")
// })
// foo(()=> {
//     console.log("HI!!!")
// })

// function getCardType(cardNumber){
//     switch (true){
//         case cardNumber.startsWith('4111'):
//             return "Visa"
//         case cardNumber.startsWith('5555') && cardNumber.endsWith('4444'):
//             return "Mastercard"
//         default:
//             throw new Error("Unknown card provider")
//     }
// }
//
// function processPayment(cb){
//     console.log("Before payment actions")
//     cb()
// }
//
// const processVisa = ()=> console.log("Processing Visa payment")
// const processMastercard = ()=> console.log("Processing Mastercard payment")
//
// function process(cardNumber){
//     if(getCardType(cardNumber) === "Visa"){
//         processPayment(processVisa)
//     }else if (getCardType(cardNumber) === "Mastercard"){
//         processPayment(processMastercard)
//     }
// }
//
//
// const cardNumber = "4111 4444 4444 4449"
// const cardNumber2 = "5555 4444 4444 4444"
//
// process(cardNumber)
// process(cardNumber2)


function readFile(onSuccess, onFailure){
    try {
        const ms = Date.now()
        console.log(ms)
        if (ms % 2 !== 0) throw new Error("Something went wrong")
        onSuccess()
    }catch (e) {
        console.log(e.message)
        onFailure()
    }
}

const onSuccess = ()=> console.log("SUCCESS")
const onError = ()=> console.log("ERROR HAPPENED")

readFile(onSuccess, onError)
