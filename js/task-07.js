const range = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
range.value = Number.parseInt(window.getComputedStyle(spanText).fontSize);
const handleInput = (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}
range.addEventListener('input', handleInput);