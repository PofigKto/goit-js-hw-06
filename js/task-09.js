function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color')
btnChangeColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanRef.textContent = color;
});
