// const person = {
//     name: "John",
//     age: 30,
//     gender: "male"
// };
//
// const {name : fullName = "Anon", age, gender, isMarried = false} = person
//
// console.log(isMarried)

// console.log(person.name)
// console.log(fullName)
// console.log(age)
// console.log(gender)

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];
//
// for (const {name, age} of people) {
//     console.log(`${name} is ${age} years old`);
// }
// for (const person of people) {
//     const {name, age} = person
//     console.log(`${name} is ${age} years old`);
// }

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };
//
// const {address : { city, country} } = person
//
// console.log(city); // "New York"
// console.log(country); // "USA"
//
// const numbers = [1, 2, 3];
//
// const [first, second, ololo] = numbers
// const first = numbers[0]
// const second = numbers[1]
// const ololo = numbers[2]
// console.log(first)
// console.log(second)
// console.log(ololo)
// console.log(numbers)


// const numbers = [1, 2, 3, 4];
// const [first,,,fourth] = numbers
//
// console.log(first)
// console.log(fourth)