
const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const spans = document.querySelectorAll("li span");
const textInput = document.querySelector("input[type='text']");
const plusButton = document.querySelector("span.fa-plus");

setup();

function setup() {
    lis.forEach(addToggleCheckedListener);
    spans.forEach(addDeleteEventListener);

    textInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addItem(this.value);
            this.value = "";
        }
    });

    plusButton.addEventListener("click", () => {
        textInput.classList.toggle("hidden");
    });

    textInput.addEventListener("transitionend", function() {
        let isHidden = this.classList.contains("hidden");
        this.style.display = isHidden ? "none" : "block";
        console.log(isHidden);
    });
}

function addToggleCheckedListener(li) {
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
}

function addDeleteEventListener(span) {
    span.addEventListener("click", function(event) {
        event.stopPropagation();
        fadeAndRemove(this.parentElement);
    });
}

function fadeAndRemove(liElement) {
    liElement.classList.add("removed");
    liElement.addEventListener("transitionend", function() {
        this.remove();
    });
}

function toggleInput(event) {
    textInput.classList.toggle("hidden");
}

function addItem(item) {
    const newLI = document.createElement("li");
    newLI.innerHTML = `<span><i class="fas fa-trash"></i></span> ${item}`;
    addDeleteEventListener(newLI.querySelector("span"));
    addToggleCheckedListener(newLI);
    ul.appendChild(newLI);
}


