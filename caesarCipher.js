const args = process.argv.slice(2);
//console.log(args);

if (args.length !== 2) {
  console.error('Please provide your input as a Phrase and a Shift Number!');
  return;
}else if(isNaN(args[1])){
    console.error('Please provide your 2nd input as a Number!');
  return;
}


const givenString=args[0];
const givenNumber=parseInt(args[1]);
const isUpperCase = str => str === str.toUpperCase();

let returnVal='';

for(const val of givenString){
    if(!isNaN(val)){
        console.error('Please provide your 1st input as a String!');
        return;
    }
    let valUC=isUpperCase(val);
   // console.log(valUC);
    let num=parseInt(val.charCodeAt());
    //console.log(num);
    //console.log(givenNumber);
    let calculeteNewValue;
    if(givenNumber>0){
       // console.log("positive ");
        calculeteNewValue=num + givenNumber;
    }else{
         //console.log("negetive ");
        calculeteNewValue=num - Math.abs(givenNumber);
    }
    //console.log(calculeteNewValue);

    if(valUC){
        if(calculeteNewValue>90){
        calculeteNewValue=calculeteNewValue-26;
        }else if(calculeteNewValue<65){
            calculeteNewValue=calculeteNewValue+26;
        }
    }else if(!valUC ){
        if(calculeteNewValue>122){
        calculeteNewValue=calculeteNewValue-26;
        }else if(calculeteNewValue<97){
            calculeteNewValue=calculeteNewValue+26;
        }
    }
   
    let newVal=String.fromCharCode(calculeteNewValue);
    returnVal=returnVal+newVal;
    //console.log(returnVal);
   
}
console.log(returnVal);
