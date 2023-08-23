const letras = ["A", "a", "B", "C", "E", "e"]

let contador = 0

for (let item of letras) {
    if (item === 'e' || item === 'E') {
        contador++
    }
}
if (contador === 0) {
    console.log("não há nenhuma letra 'e' =(")
} else {
    console.log(`foram encontradas ${contador} letras 'e'`)
}