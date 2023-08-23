const arrayA = [1, 3, 3, 44, 11]
const arrayB = [57, 4, 21, 32, 13]
const arrayC = []

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        arrayC[i] = arrayA[i]
    } else {
        arrayC[i] = arrayB[i]
    }
}

for (let item of arrayC) {
    console.log(item)
}