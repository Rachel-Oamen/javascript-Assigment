
const prompt = require("prompt-sync")();
let number = prompt("enter any number: ");
 let count = 0;
    while(number != 0){
   
 //if (number>1);
 // console.log("invalid")
    
     let digit = number % 10
        number = number / 10
        count= count + digit
    }
console.log(Math.floor(count)); 


