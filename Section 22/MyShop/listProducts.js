
const faker = require("faker");
// faker.locale = "zh_TW";

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");
for (let i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}

