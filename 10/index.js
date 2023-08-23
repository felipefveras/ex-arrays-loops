const numeros = [8, 89, 4, 1]
let maiorNumero = 0
let menorNumero = 999999999999999999999

for (let i = 0; i < numeros.length; i++) {
    if (maiorNumero < numeros[i]) {
        maiorNumero = numeros[i]
    }
    if (menorNumero > numeros[i]) {
        menorNumero = numeros[i]
    }
}

console.log(maiorNumero - menorNumero)
