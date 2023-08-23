const nomes = ["Ana", "Joana", "Carlos", "amanda", "alexandre"]
const nomes2 = []

let i = 0
let j = 0

for (let item of nomes) {
  if (item.substring(0, 1) === 'A' || item.substring(0, 1) === 'a') {
    nomes2[i] = item
    i++
  }
}

console.log(nomes2)


