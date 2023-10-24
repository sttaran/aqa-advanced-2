const list = [1,2, "llll", true, {name: "Alice"}, ["Joe", "Peter", ["Hello"]]]

//
// console.log(list[0])
// console.log(list[list.length - 1])

// const user =  {name: "Alice"}
// user.name

// console.log(list[list.length - 1][2])
// console.log(list[list.length - 1][2][0])

// DON'T DO
// console.log(list[list.length - 1][(list[list.length - 1]).length -1][0])
/*
* list[list.length - 1] - ["Joe", "Peter", ["Hello"]]
* list[list.length - 1][2] - ["Hello"]
* list[list.length - 1][2][0] - "Hello"
* */
// console.log(list[list.length - 2].name)

// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits)
// fruits[0] = "raspberry"
// console.log(fruits)

// let fruits = [['apple', 'banana', 'orange'], ['apple', 'banana', 'orange']];
// console.log(fruits)
// // fruits[1][1] = "raspberry"
// fruits[1] = ["Hello", "apple"]
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[0].length)
// fruits = ["1111"]
// console.log(fruits)

// const users = [
//     {
//         id: 1,
//         name: "Alice",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "Joe",
//         age: 22
//     }
// ]