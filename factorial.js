const prompt = require("prompt-sync")();

let number = prompt("enter any number: ");

    let factorial = 1;
 for (let count =number; count >= 1; count--){
   
    factorial = count * factorial;
}
console.log(factorial);
