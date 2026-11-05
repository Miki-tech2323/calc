const placeholder = document.getElementById('placeholder');
const btns =  [document.querySelector('btn')];
let currentOutput = '';

function addToOutput(element) {
    currentOutput += element;
    return currentOutput;
}

btns.forEach(element => {
    element.addEventListener('click', addToOutput(element));
});

console.log(currentOutput);

