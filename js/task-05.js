//10 lines (10 sloc)  365 Bytes
//
//const input = document.querySelector('input#name-input');
//const output = document.querySelector('span#name-output');
//const handleInput = () => {
 //   const inputName = input.value.trim();
 //   if (inputName !== '') {
 //       return (output.textContent = inputName);
//    }
 //   return (output.textContent = 'Anonymous');
//};
//input.addEventListener('input', handleInput);

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonimus';
    } else{
    nameOutput.innerHTML = input.value;
    }
}