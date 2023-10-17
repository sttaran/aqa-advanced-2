
function a() {
    if(true){
        console.log()
    }
    b();
    c();
}

function b() {
    console.log("Функція b");
}

function c() {
    console.log("Функція b");
}


a();