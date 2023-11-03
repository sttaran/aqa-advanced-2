
function foo1(){
    console.log(`Working foo1`)
}
function foo2(){
    console.log("Working foo2 SYNC")
    setTimeout(()=>console.log(`Working foo2 ASYNC`), 5_000)
}
function foo3(){
    console.log(`Working foo3`)
}

foo1()
foo2()
foo3()