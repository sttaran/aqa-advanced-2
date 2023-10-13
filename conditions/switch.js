const age = 18

switch (true){
    case age >= 18:
        console.log("A person is adult")
        break
    case age === 18:
        console.log("A person is almost adult")
        break
    default:
        console.log("A person is NOT adult")
}

switch (age){
    case 18:
        console.log("A person is adult")
        break
    case 16:
        console.log("A person is almost adult")
        break
    default:
        console.log("A person is NOT adult")
}
