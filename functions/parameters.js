// function printGreeting(name = "Anonymous"){
//     console.log(`Hello ${name}!`)
// }
//
// printGreeting("Joe")
// printGreeting("Alice")
// printGreeting()


function calculateSum(num1, num2){
    console.log(num1)
    console.log(num2)
    console.log(arguments)

    const args = Array.from(arguments)
    console.log(args)

    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i]
    }
    return sum
}

// calculateSum()
// console.log(calculateSum(1, 2, 4))
console.log(calculateSum(1, 2, 4, 5))