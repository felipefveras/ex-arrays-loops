const numeros = [54, 10, 14, 87, 10, 284]
let contador = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(i)
        contador++
    }
}
if (contador === 0) {
    console.log('-1')
}