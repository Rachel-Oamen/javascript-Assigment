const prompt = require("prompt-sync")();
let sum = 0;
let difference = 0;
let square1 = 0;
let square2 = 0;

let number1 = prompt("enter first integer: ");
let number2 = prompt("enter second integer: ");

square1 = number1 * number1;
square2 = number1 * number1;

sum = square1 + square2;
difference = square1 - square2;

console.log("Sum of Square is:" + sum);
console.log("Difference of Square is:" + difference);


