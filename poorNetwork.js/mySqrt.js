const mySqrt = function (number){
	let root  = 0;
	
for(let count = 1; count * count <= number; count++){
	root = count;
}
	return root;
	
}

console.log(mySqrt(30));












































