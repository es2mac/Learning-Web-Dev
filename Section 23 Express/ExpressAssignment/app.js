
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hi, welcome to the assignment");
});

app.get("/speak/:animal", (req, res) => {
    const animal = req.params.animal;
    const noise = {
        "pig" : "Oink",
        "cow" : "Moo",
        "dog" : "Woof!"
    }[animal];
    if (noise) {
        res.send("The " + animal + " says '" + noise + "'");
    } else {
        res.send("What does the " + animal + " say?")
    }
});

app.get("/repeat/:string/:times", (req, res) => {
    const string = req.params.string;
    let time = Number(req.params.times);
    if (!(time >= 0)) {
    if (!(time >= 0)) {
        time = 0;
    }
    res.send(Array(time).fill(string).join(" "));
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(5000);
