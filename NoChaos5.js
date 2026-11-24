const prompt = require("prompt-sync")();

let word = prompt("Enter a word: ");

let reverse = "";
for (let count = word.length - 1; count >= 0; count++); {

	reverse = reverse + word[count];
	

}



if (word.toLowerCase()=== reverse.toLowerCase()) {

console.log(word + " is a palindrom");

}

else {


	console.log(word + " is not a palindrom");

}

