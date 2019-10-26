const displayElement = document.querySelector('.display');
// set default calculator display value to 0.
displayElement.innerHTML = '0.';
const displayElementNumericalValue = parseFloat(displayElement.innerHTML);

console.log(displayElementNumericalValue);
