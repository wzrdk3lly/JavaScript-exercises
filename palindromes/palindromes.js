const palindromes = function(input) {
    let cleanInput = input.toUpperCase().split("").filter(getOnlyLetters);
    let reverseArr = [];
  
    for(let i = cleanInput.length -1; i > -1; i--){
      reverseArr.push(cleanInput[i]);
    }
    
    let str1 = cleanInput.toString();
    let str2 = reverseArr.toString();
  
    return str1 === str2;
}

function getOnlyLetters(text){
    return text !== " " && 
           text !== "!" &&
           text !== "." &&
           text !== "," ;
  }
module.exports = palindromes
