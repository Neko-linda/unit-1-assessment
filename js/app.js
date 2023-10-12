console.log('test');

const countDisplay = document.getElementById('counter-container');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const inputElement = document.getElementById('input');

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
};

incrementButton.addEventListener("click", () => {
    const inputVal = parseInt(inputElement.value, 10);
    count += inputVal;
    updateCount();
});

decrementButton.addEventListener("click", () => {
    const inputVal = parseInt(inputElement.value, 10);
    count -= inputVal;
    updateCount();
});

updateCount();