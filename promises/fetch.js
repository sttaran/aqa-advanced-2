const BASE_URL = "https://jsonplaceholder.typicode.com/"

// fetch(BASE_URL)
// .then((response)=> response.json())
// .then((jsonBody)=> console.log(jsonBody))

async function fetchTodoByIdPromise(id){
    return fetch(`${BASE_URL}todos/${id}`)
                .then((response)=> response.json())
}

async function fetchTodoByIdAsync(id){
    const response = await fetch(`${BASE_URL}todos/${id}`)
    const jsonBody = await response.json()
    return jsonBody
}

const createPost = async (body)=> {
  return  fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

// fetchTodoByIdPromise(1).then((value)=> console.log(value)).catch((e)=> console.log(e))
// fetchTodoByIdAsync(1).then((value)=> console.log(value)).catch((e)=> console.log(e))
// const createPostBody = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }
// // createPost(createPostBody).then((value)=> console.log(value))
//
// console.log(createPostBody)
// const stringified = JSON.stringify(createPostBody)
// console.log(stringified)
// console.log(typeof stringified)
// const parsed = JSON.parse(stringified)
// console.log(parsed)
// console.log(typeof parsed)

// const object1 = {
//     a: 1
// }
//
// const object2 = JSON.parse(JSON.stringify(object1))
//
// object2.a = 15
// console.log(object2)
// console.log(object1)

function printWithDelay(text, ms){
  setTimeout(()=> console.log(text), ms)
}


