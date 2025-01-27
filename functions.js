const operations = {'multiply': multiply, 'substract':substract, 'summ': summ, 'divide':divide}
const selectedOperation = "summ";

function multiply (a,b) {return a*b};
function substract (a,b) {return a-b};
function summ (a,b) {return a+b};
function divide (a,b) {return a/b};

function calculate(a, b, operation){
  return operation(a,b)
}
console.log(calculate(6, 3, operations[selectedOperation]));