
let numberOfColors = 6;
let colors;
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyButton = document.querySelector("#easyButton");
const hardButton = document.querySelector("#hardButton");

reset();

resetButton.addEventListener("click", reset);

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfColors = 3;
    reset();
});
hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numberOfColors = 6;
    reset();
});

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", checkCorrectness);
}

function reset() {
    colors = generateRandomColors(numberOfColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "";
    for (let i = 0; i < squares.length; i++) {
        if (i < colors.length) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    const red   = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue  = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

function pickColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function checkCorrectness() {
    const clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeAllToPickedColor();
        resetButton.textContent = "Play Again?";
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
}

function changeAllToPickedColor() {
    for (const square of squares) {
        square.style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
}



