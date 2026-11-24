const prompt = require("prompt-sync")();

let word = prompt("Enter a word");

let vowel = 0;
let consonant = 0;

for (count = 0; count < word.length; count++){


let letter = word[count].toLowerCase();


if (letter === "a" || letter === "e" || letter === "i" || letter "o" || letter "u") {

		vowel++;

} 

else if (letter >=a && letter <= "z"){
			consonant++;

}
}

console.log("Vowels" + vowel);
console.log("Consonant" + consonant);
