
function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
    // for (let obj of array.reverse()) {
    //     console.log(obj);
    // }
}

let a = [1, 2, 3];
// printReverse(a);
// printReverse(a);

function isUniform(array) {
    if (array.length < 2) { return true; }
    let firstItem = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] != firstItem) { return false; }
    }
    return true;
}

// console.log(isUniform(a))
// a = [1, 1, 1]
// console.log(isUniform(a))

function sumArray(array) {
    return array.reduce((total, current) => total + current, 0);
}

a.push(8)

console.log(sumArray(a));

// Missed doing max(), but that's easy

