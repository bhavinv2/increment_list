const counterElement = document.getElementById('button');
const incrementButton = document.getElementById('increment_button');
const decrementButton = document.getElementById('decrement_button');
const resetButton = document.getElementById('reset_button');


let counter = 0;


function updateCounter(value) {
    counter += value;
    counterElement.textContent = counter;
}

incrementButton.onclick = () => {
    updateCounter(1);
};

decrementButton.onclick = () => {
    updateCounter(-1);
};

resetButton.onclick = () => {
    counter = 0;
    counterElement.textContent = counter;
};
