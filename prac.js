let max=parseInt(prompt("enter the maximum number!!"));
while(!max){
    max=parseInt(prompt("enter the valid number!!"));
}
const target= Math.floor(Math.random() * max)+1;
console.log(target);  

let guess=parseInt(prompt("enter your first guess"));
let c=0;
while(parseInt(guess)!==target){
    if(guess=='q') break;
    c++;
    if(guess>target)
        guess=prompt("too highh");
    else
        guess=promt("too low")
}
if(guess==='q'){
    console.log("ok,....quittingg");
}
else{
    console.log(`you got that....took you ${c} guesses`);
}