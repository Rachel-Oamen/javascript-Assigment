const prompt = require("prompt-sync")();
let number = prompt("Enter an integer Number");
	let square = number * number;
		if (square > 100){
			console.log(square + "is greater than 100");
		}
		else if(square <100){
			console.log(square + "is less than 100");
		}
		else if(square == 100){
			console.log(square + "is equal to 100");
		}
		else{
			console.log(square + "is not equal to 100");
		
