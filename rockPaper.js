const args = process.argv.slice(2);
//console.log(args);

if (args.length !== 1) {
  console.error('Please provide your input either Rock Paper or Scissors');
  return;
}

const textArray = [
    'rock',
    'paper',
    'scissors'
];

let yourVal=args[0].toLowerCase();
//console.log('Your input:',yourVal);
if(!textArray.includes(yourVal)){
    console.log('Not a valid input.',capitalize(yourVal));
    return;
}
function capitalize(s)
{
    return String(s[0]).toUpperCase() + String(s).slice(1);
}
let genVal = Math.floor(Math.random()*textArray.length);

//console.log('Value generates:',textArray[genVal]);

let randomVal=textArray[genVal];

if(yourVal===randomVal){
    console.log(`Game results: You chose ${capitalize(yourVal)}. Computer chose ${capitalize(randomVal)}.`,"It is a tie");
} else{
    console.log(`Game results: You chose ${capitalize(yourVal)}. Computer chose ${capitalize(randomVal)}.`,playGame(yourVal,randomVal)?'You win!':'You lose!');
}

function playGame(yourVal,randomVal){
    switch(yourVal + "|" + randomVal) {
        case "rock|paper":
            return 0;
        case "paper|rock":
            return 1;    
        case "paper|scissors":
            return 0;
        case "scissors|paper":
            return 1;    
        case "scissors|rock":
            return 0;
        case "rock|scissors":
            return 1;    
        default :
            return 'Not a valid input.'    
    }
}

