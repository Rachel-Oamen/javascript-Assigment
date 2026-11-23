/*
let count="";
for(let counter=1; counter<=7; counter++){
count = count+"#";
console.log(count);
}
*/

for(let row =1; row<=7; row++){
    for(let colume = 1; colume<=row; colume++){
process.stdout.write("#");
}
console.log("");
}
