

var i = 0;

console.log("All numbers between -10 and 19");

i = -10;
while (i <= 19) {
    console.log(i);
    i += 1;
}

console.log("Even numbers between 10 and 40");

i = 10;
while (i <= 40) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i += 1;
}

console.log("Odd numbers between 300 and 333");

i = 300;
while (i <= 333) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i += 1;
}

console.log("All numbers divisible by both 5 and 3, between 5 and 50");


// Console
i = 5;
while (i <= 50) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log(i);
    }
    i += 1;
}

