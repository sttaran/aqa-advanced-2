// function constructor(name, age = 12){
//
// }

class Animal {
  constructor (name, age = 12) {
    this.animalName = name
    this.age = age
  }

  walk () {
    console.log(`${this.animalName} is walking!!!`)
  }

  talk () {
    console.log(`${this.animalName} is talking!!!`)
  }
}

const duck = new Animal('Scrudge', 8)
const cat = new Animal('Tom')

// console.log(duck)
// duck.animalName = "random"
// console.log(duck)
// console.log(cat)

// console.log(duck.animalName)
// duck.walk()
// duck.talk()
