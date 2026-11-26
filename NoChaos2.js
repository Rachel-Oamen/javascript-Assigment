const prompt = require("prompt-sync")();
let sum = 0;
let count =0;

let number = Number(prompt("Enter a Number( -1 to Stop ):"));

 
while (number !== -1) {
 
 
    sum = sum + number;
 
    count = count + 1;

    let average = sum / count;

    console.log("Average is = " + average);

    let number = Number(prompt("Enter a Number Again "));
}
 
