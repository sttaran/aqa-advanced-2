// const chalk = require("chalk")
import chalk from "chalk";

// const {age} = require("./test.js")
import testNumber, {print as printFromTest} from "./test.js"

const age = 12
function print(){
    console.log(chalk.blue("Hello chalk"))
}

console.log(testNumber)
print("Hello chalk")
printFromTest("Hello chalk")


// console.log(chalk.green("Hello JS!"))