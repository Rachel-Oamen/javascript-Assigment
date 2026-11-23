// comparing Number
const prompt = require("prompt-sync")();

let smallest = 0;
let largest = 0;
let sum = 0;
let average = 0;
let product = 0;


let digit1 = Number (prompt("enter first integer: "));
let digit2 = Number (prompt("enter second integer: "));
let digit3= Number (prompt("enter third integer: "));
sum = digit1 + digit2 + digit3;
average = sum / 3;
largest = digit1;

if (digit2 > largest){
	largest = digit2;
	}
	
if (digit3 > largest){
	largest = digit3;
}

smallest = digit1;
if(digit2 < smallest){
	smallest = digit2;
	
	}
if(digit3 < smallest){
	digit3 = smallest;
}


console.log("Sum of the Number is:" + sum);
console.log("Average of the Three Numbers is:" + average);
console.log("largest Number is:" + largest);
console.log("smallest Number is:" + smallest);



