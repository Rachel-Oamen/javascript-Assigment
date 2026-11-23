let ChessBoard = "";
for(let row = 1; row <=8; row++){
	for(let colume = 1; colume <=8; colume++){
if (row % 2===0){
ChessBoard +="# ";
}

else{
ChessBoard +=" #";
}



}
ChessBoard += ("\n");
}
console.log(ChessBoard)

