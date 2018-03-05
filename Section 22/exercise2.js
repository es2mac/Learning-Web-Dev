
function average(numbers) {
    return Math.round(numbers.reduce((total, n) => total + n, 0) / numbers.length);
}


const scores = [90, 98, 89, 100, 100, 86, 94]
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]

console.log(average(scores))
console.log(average(scores2))


