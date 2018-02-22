
function isEven(number) {
    return number % 2 === 0;
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n-1);
}

// for (let i = 0; i < 10; i++) {
//     console.log(factorial(i))
// }

function kebabToSnake(string) {
    return string.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world-2"));

