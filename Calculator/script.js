
document.addEventListener('DOMContentLoaded', function() {
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let shouldResetScreen = false;

    const screen = document.getElementById('screen');
    const numberButtons = document.querySelectorAll('#numbers button');
    const operatorButtons = document.querySelectorAll('#operation button');
    const clearButton = document.getElementById('clear-btn');
    const equalsButton = document.getElementById('equals-btn');

    numberButtons.forEach(button => {
        button.addEventListener('click', () => appendNumber(button.textContent));
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => setOperation(button.textContent));
    });

    clearButton.addEventListener('click', clear);
    equalsButton.addEventListener('click', evaluate);

    function appendNumber(number) {
        if (shouldResetScreen) resetScreen();
        currentInput += number;
        updateScreen();
    }

    function setOperation(op) {
        if (currentInput === '') return;
        if (firstOperand !== null) evaluate();
        operator = op;
        firstOperand = parseFloat(currentInput);
        shouldResetScreen = true;
    }

    function evaluate() {
        if (operator === '' || shouldResetScreen) return;
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        firstOperand = null;
        updateScreen();
    }

    function clear() {
        currentInput = '';
        operator = '';
        firstOperand = null;
        shouldResetScreen = false;
        updateScreen();
    }

    function resetScreen() {
        currentInput = '';
        shouldResetScreen = false;
    }

    function updateScreen() {
        screen.textContent = currentInput;
    }
});
