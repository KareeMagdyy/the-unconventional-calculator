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

function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value);
  const initResult = currentResult;
  let mathOperator = '';
  if (calculationType === 'Add') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'Subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'Multiply') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'Divide'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else {
    console.log('Invalid calculation Ln:52');
  }

  creatAndWriteOutput(mathOperator, initResult, enteredNumber);
  writeToLog(calculationType, initResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('Add');
}

function subtract() {
  calculateResult('Subtract');
}

function multiply() {
  calculateResult('Multiply');
}

function divide() {
  calculateResult('Divide');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

