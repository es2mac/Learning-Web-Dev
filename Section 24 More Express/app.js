
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fellinlovewith/:thing", (req, res) => {
    const thing = req.params.thing;
    res.render("fellinlovewith", {"thing" : thing});
});







app.get("*", (req, res) => {
    res.send("Not Found");
});


app.listen(5000, () => {
    console.log("Server now listening");
});



