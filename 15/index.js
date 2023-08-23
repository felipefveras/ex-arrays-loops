const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
const impares = []
let i = 0
let p = 0

for (let item of original) {
    if (item % 2 === 0) {
        pares[p] = item
        p++
    } else {
        impares[i] = item
        i++
    }
}

console.log(pares)

console.log(impares)