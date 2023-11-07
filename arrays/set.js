const arr = ['1', 1, 2, 3, 'hello', 1, 2, 3, 4, 4, 5]

const set = new Set(arr)
set.add(7)
console.log([...set])
