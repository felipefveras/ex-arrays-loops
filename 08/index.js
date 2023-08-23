const numeros = [3, 24, 1, 8, 11, 7, 15]
let maiorNumero = 0

for (let i = 0; i < numeros.length; i++) {
    if (maiorNumero < numeros[i]) {
        maiorNumero = numeros[i]
    }
}
console.log(maiorNumero)