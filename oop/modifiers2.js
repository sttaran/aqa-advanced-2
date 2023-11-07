Math.PI

class MyMath {
  constructor () {
    this.message = 'I am available from instances only'
  }

  static PI = 3.14

  static sum (num1, num2) {
    return num1 + num2
  }
}

// console.log(Math.PI)
// console.log(MyMath.PI)

// console.log(MyMath.sum(2,7))
// const myMathInstance = new MyMath()
// // console.log(myMathInstance.sum(1,2))
// console.log(myMathInstance)
//
// console.log(myMathInstance.PI)
// console.log(myMathInstance.message)

// console.log(MyMath.message)

class TimeUtils {
  static formatDate (date) {
    return date.toGMTString()
  }
}

const date = new Date()
const formattedDate = TimeUtils.formatDate(date)

console.log(date)
console.log(formattedDate)
