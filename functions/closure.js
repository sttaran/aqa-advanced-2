function makeCounter(){
    let i = "|-"
    return function (){
        i += "|-"
        console.log(i)
    }
}

const counter = makeCounter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()

console.log("take a break")
const counter2 = makeCounter()
counter2()
counter()
