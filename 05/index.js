const original = [1, 4, 12, 21, 53, 88, 112]
const falsificada = []
let i = 0

for (let item of original) {
    if (item % 2 === 0) {

        falsificada[i] = item
        i++
    }
}

for (let itens of falsificada) {
    console.log(itens)
}