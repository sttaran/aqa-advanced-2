class Temperature {
  #ceslsius

  constructor (celsius) {
    this.#ceslsius = celsius
  }

  get celsius () {
    return this.#ceslsius
  }

  get fahrenheit () {
    return this.#ceslsius * 9 / 5 + 32
  }

  set celsius (celsius) {
    if (celsius < -273.15) {
      console.log('Temperature below absolute zero is not possible.')
      return
    }
    this.#ceslsius = celsius
  }
}

const temp = new Temperature(28)
console.log(temp.celsius)
temp.celsius = 40
console.log(temp.celsius)
temp.celsius = -275
console.log(temp.celsius)
console.log(temp.fahrenheit)
