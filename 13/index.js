const disjuntores = [true, false, true, false, false, true, false, true]
let i = 0

for (let item of disjuntores) {
    if (item === true) {
        console.log(i)
    }
    i++
}