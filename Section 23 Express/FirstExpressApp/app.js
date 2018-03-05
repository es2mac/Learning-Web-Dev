

const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("Hi there!");
});

app.get("/bye", (request, response) => {
    response.send("Goodbye!");
});
app.get("/dog", (request, response) => {
    response.send("Woof");
});

app.get("/r/:subredditName", (request, response) => {
    response.send(`Here's the ${request.params["subredditName"]} subreddit!`);
});
app.get("*", (request, response) => {
    response.send("You got a star!");
});



app.listen(5000, function() {
    console.log("Server started!");
});


