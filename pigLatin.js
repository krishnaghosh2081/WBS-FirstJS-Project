const args = process.argv.slice(2);
//console.log(args);

if (args.length < 1) {
  console.error('Please provide your input .');
  return -1;
}else{
    console.log('Your input:',args);
}
const finalValue=[];
for(const arg of args){
    let val=arg.split(' ');
    //console.log('each input:',val);
    //let i=1;
    const changedVal=[];
    for(const valueTochange of val){
        //console.log('each input to change:',valueTochange);
        let valChanged=checkAndChange(valueTochange);
        changedVal.push(valChanged);
        //i++;
    }
    //console.log("changedVal:",changedVal);
    let createFinalVal='';
    changedVal.forEach((num)=> {
         createFinalVal=createFinalVal+" "+num;
        //console.log('Final output:',createFinalVal);
    });
    finalValue.push(createFinalVal);
   

}

console.log('Final output:',finalValue);

function isVowel(value){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(value);
}

function checkAndChange(value){
    let firstChar=value.substring(0, 1);
    //console.log('firstChar',firstChar);
    if(isVowel(firstChar)){
        //If a word starts with a vowel add the word "way" at the end of the word.
        // Example: Awesome = Awesome +way = Awesomeway
        return value+'way';
    }else if(value.length>=3){
        
        let firstChar1=value.substring(0, 1);
        let secondChar=value.substring(1, 2);
        let lastAllchar=value.substring(2,value.length);
        if(!isVowel(firstChar1) && !isVowel(secondChar)){
            //If a word starts with two consonants move the two consonants to the end of the word and add "ay."
            //Example: Child = Ildch + ay = Ildchay
            return lastAllchar+firstChar1+secondChar+'ay';
        }else if(!isVowel(firstChar1) && isVowel(secondChar)){
            //If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
            //Example: Happy = appyh + ay = appyhay
            return secondChar+lastAllchar+firstChar1+'ay';
        }

        return value;
    }else{
        return value;
    }
}

