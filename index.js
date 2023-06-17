// Higher Order Function
// Function which takes another function as an arguments is call Higher Order functions

// Callback Function
// Function which get passed as an argument to another function is called Callback Function

// Example
// Normal Arrow Function
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const calculator = (n1, n2, operator) => operator(n1, n2);

console.log(calculator(10, 5, add)); // 15
console.log(calculator(10, 5, sub)); // 5
