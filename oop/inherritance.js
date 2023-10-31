// // Створення об'єкта "прототипу"
// const animal = {
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// };
//
// // Створення об'єкта, який успадковує прототип
// const dog = {
//     name: "Dog",
//     sound: "Woof",
// };
// dog.__proto__ = animal;
//
// // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woof


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof");
    }
}


const myDog = new Dog("Duke")
myDog.speak()
console.log('-----------------')
class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
    }

    speak() {
        console.log("meow meow meow meow")
    }
}

const myCat = new Cat("Jerry")
myCat.speak()
console.log('-----------------')

class WildCat extends Cat {
    constructor(name) {
        super(name);
    }

    speak() {
        super.speak()
        console.log("Or maybe hrrrrrrrrrrrrrrrr")
    }
}

const wildCat = new WildCat("Bahira")
wildCat.speak()