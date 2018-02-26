
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let gameOver = false;

const p1button = document.querySelector("#p1");
const p2button = document.getElementById("p2");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const numberInput = document.querySelector("input[type='number'");
const winningScoreDisplay = document.querySelector("p span");

numberInput.value = winningScore.toString();
winningScoreDisplay.textContent = winningScore.toString();

console.log(winningScoreDisplay);

p1button.addEventListener("click", () => {
    if (gameOver) { return; }
    p1score += 1;
    p1Display.textContent = p1score.toString();
    if (p1score >=  winningScore) {
        gameOver = true;
        p1Display.classList.add("winner");
    }
});

p2button.addEventListener("click", () => {
    if (gameOver) { return; }
    p2score += 1;
    p2Display.textContent = p2score.toString();
    if (p2score >=  winningScore) {
        gameOver = true;
        p2Display.classList.add("winner");
    }
});

function reset() {
    p1score = 0;
    p2score = 0;
    gameOver = false;
    p1Display.textContent = p1score.toString();
    p2Display.textContent = p2score.toString();
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

resetButton.addEventListener("click", reset);

// Note: arrow function doesn't treat "this" the same way
numberInput.addEventListener("change", function() {
    winningScore = Number(this.value);
    console.log(typeof this.value)
    winningScoreDisplay.textContent = winningScore.toString();
    reset();
});

