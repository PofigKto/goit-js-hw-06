
let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action=decrement]');
const buttonIncrement = document.querySelector('button[data-action=increment]');
let valueEl = document.querySelector('#value');

const decrementClick = () => {
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
};
const incrementClick = () => {
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
};
buttonDecrement.addEventListener('click', decrementClick);
buttonIncrement.addEventListener('click', incrementClick);