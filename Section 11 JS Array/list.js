
let todos = [];

let input = prompt("What would you like to do?");

while (input !== "quit") {

    if (input === "list") {
        for (let todo of todos) {
            console.log(todo);
        }
    } else if (input === "new") {
        input = prompt("Enter your todo:");

        todos.push(input);
        todos.forEach(function(todo) {
            console.log(todo);
        })
    }

    input = prompt("What would you like to do?");
}

console.log("OK, bye!");


// Note: There's more to this exercise, but I've skipped them


