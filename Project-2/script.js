const number = document.getElementById('number');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
    number.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});