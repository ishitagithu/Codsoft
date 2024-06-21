let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingNextOperand = false;

function appendToDisplay(value) {
  if (awaitingNextOperand) {
    displayValue = value;
    awaitingNextOperand = false;
  } else {
    displayValue = displayValue === '0' ? value : displayValue + value;
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = displayValue;
}

function setOperator(op) {
  if (operator !== null && !awaitingNextOperand) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = op;
  awaitingNextOperand = true;
}
