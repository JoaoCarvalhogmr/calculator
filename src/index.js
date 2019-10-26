const displayElement = document.querySelector(".display");
// set default calculator display value to 0.
displayElement.innerHTML = "0.";
const displayElementNumericalValue = parseFloat(displayElement.innerHTML);

// 1. Create functions (small) for every mathematical operation
function sum(args) {
  let result = 0;
  args.forEach((arg) => {
    result += arg;
  });

  console.log(result);
}
function subtract(a, b) {}
function division(a, b) {}
function multiply(a, b) {}

// 2. Create function for CLICK handlers - different for numbers, operations and enter
function handleNumberClick() {}

function handleOperationClick() {}

function handleEnterClick() {}

// 3. grab necessary elements
const numberElements = document.querySelectorAll('.number');
const operationElements = document.querySelectorAll('.operation');
const enterElement = document.getElementById('enter');

const numberElementsArray = Array.from(numberElements);
const operationElementsArray = Array.from(operationElements);

sum([1,2,3,5,7]);

// 4. Add event handlers and change display the values

// 5. Add mathematical operators to the event handlers to display the result

// 6. Display the operation being used in the lower right corner and the previous numbers in the upper left
