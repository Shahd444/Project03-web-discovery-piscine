let count = 0;

let number = document.getElementById("number");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");

function numberColor() {
    if (count > 0) {
        number.style.color = "green";
    } else if (count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
}

function increment() {
    count++;
    number.textContent = count;
    numberColor();
}

function decrement() {
    count--;
    number.textContent = count;
    numberColor();
}

function reset() {
    count = 0;
    number.textContent = count;
    numberColor();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);