// let index = 10
// let iteration = 1
//
// while (index > 0){
//     console.log("iteration", iteration)
//     console.log(`Index: ${index}`)
//     index--
//     iteration++
// }

// let index = 1
//
// while (index > 1){
//     console.log(`Index: ${index}`)
// }
//
// do {
//     console.log(`Index: ${index}`)
// } while (index > 1)

let index = 10

// while (index > 0){
//     if(index % 2 !== 0) {
//         index--
//         continue
//     }
//
//     console.log(`Index: ${index}`)
//     index--
// }


while (index > 0){
    if(index % 2 !== 0) {
        break
    }

    console.log(`Index: ${index}`)
    index--
}