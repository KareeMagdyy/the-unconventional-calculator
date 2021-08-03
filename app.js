const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function creatAndWriteOutput(operator, resultBefore, resultAfter) {
  const calcDescription = `${resultBefore} ${operator} ${resultAfter}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  currentResult = currentResult + enteredNumber;
  creatAndWriteOutput('+', initResult, enteredNumber);
  writeToLog('Add', initResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  currentResult = currentResult - enteredNumber;
  creatAndWriteOutput('-', initResult, enteredNumber);
  writeToLog('Subtract', initResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  currentResult = currentResult * enteredNumber;
  creatAndWriteOutput('*', initResult, enteredNumber);
  writeToLog('Multiply', initResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  currentResult = currentResult / enteredNumber;
  creatAndWriteOutput('/', initResult, enteredNumber);
  writeToLog('Divide', initResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

