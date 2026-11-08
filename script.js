const screen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
    const value = button.id;

    if (value === 'clear') {
        currentInput = '';
        screen.value = '0';
        return;
    }

    if (value === '=') {
        try {
        currentInput = eval(currentInput).toString();
        screen.value = currentInput;
        } catch (error) {
        screen.value = 'Błąd';
        currentInput = '';
        }
        return;
    }

    currentInput += value;
    screen.value = currentInput;
    });
});