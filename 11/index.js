const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245]
const novoArray = []
let i = 0

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray[i] = item
        i++
    }
}
for (let itens of novoArray) {
    console.log(itens)
}
