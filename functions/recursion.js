// function countDown(number){
//     console.log(number)
//
//     if(number > 0){
//         countDown(number - 1)
//     }
// }
//
// countDown(10)

function countDown(number){
    console.log(number)
    countDown(number - 1)
}

countDown(10)