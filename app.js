const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

const defaultResult = 0;
let currentResult = 0;

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

function creatAndWriteOutput(operator, resultBefore, resultAfter) {
    const calcDescription = `${resultBefore} ${operator} ${resultAfter}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult + enteredNumber;
    creatAndWriteOutput('+', initResult, enteredNumber);
}

function subtract() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult - enteredNumber;
    creatAndWriteOutput('-', initResult, enteredNumber);
}

function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult * enteredNumber;
    creatAndWriteOutput('*', initResult, enteredNumber);
}

function divide() {
    const enteredNumber = parseInt(userInput.value);
    const initResult = currentResult;
    currentResult = currentResult / enteredNumber;
    creatAndWriteOutput('/', initResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

