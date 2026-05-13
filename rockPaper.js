const args = process.argv.slice(2);
//console.log(args);

if (args.length !== 1) {
  console.error('Please provide your input either Rock Paper or Scissors');
  return;
}

const textArray = [
    'Rock',
    'Paper',
    'Scissors'
];

let yourVal=args[0];
//console.log('Your input:',yourVal);
if(textArray.some((val) => val===yourVal)){
    console.log('Your input:',yourVal);
}else{
    console.log('Not a valid input.',yourVal);
    return;
}

let genVal = Math.floor(Math.random()*textArray.length);

console.log('Value generates:',textArray[genVal]);

let randomVal=textArray[genVal];

if(yourVal===randomVal){
    console.log("It is a tie");
} else{
    console.log("Game results: ",playGame(yourVal,randomVal));
}

function playGame(yourVal,randomVal){
    switch(yourVal + "|" + randomVal) {
        case "Rock|Paper":
            return 'You lose';
        case "Paper|Rock":
            return 'You win';    
        case "Paper|Scissors":
            return 'You lose';
        case "Scissors|Paper":
            return 'You win';    
        case "Scissors|Rock":
            return 'You lose';
        case "Rock|Scissors":
            return 'You win';    
        default :
            return 'Not a valid input.'    
    }
}

