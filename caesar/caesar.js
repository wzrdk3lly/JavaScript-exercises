const caesar = function(text, num) {
  let encrypt = '';
  let shiftedChar = '';
  for(let i = 0; i < text.length; i++){
      if(containsPunc(text.charAt(i))){ // If there is a punctuation add to the new string
       encrypt += text.charAt(i);
      }
      else if(num > 0){ // When there is a positive iteration, shift num spaces to the new character
       let  charCode = text.charCodeAt(i);
       for(let j = 0; j < num; j++){            
         charCode++;
         charCode = getCapitalPositive(charCode); // If we reach an Ascii character past Z or z wrap around back to A or a
       }
       shiftedChar = String.fromCharCode(charCode);
       encrypt += shiftedChar;
      }
      else if(num < 0){ // When there is a negative iteration, shift num spaces to the new character
          let  charCode = text.charCodeAt(i);
          for(let j = 0; j > num; j--){
            charCode--;
            charCode = getCapitalNegative(charCode); // IF we reach an Ascii character past A or a wrap around back to Z or z
          }
          shiftedChar = String.fromCharCode(charCode);
          encrypt += shiftedChar;
        }
  }
      return encrypt;
}

  function containsPunc(text){
    return text === ',' ||
          text === '.' ||
          text === ' ' ||
          text === '!';
  }

  function getCapitalPositive(charnum){
    if (charnum == 91){
      return charnum = 65;
    }
    else if (charnum == 123){
      return charnum = 97;
    }
    else return charnum;
  }

  function getCapitalNegative(charnum){
    if (charnum == 64 ){
      return charnum = 90;
    }
    else if (charnum == 96){
      return charnum = 122;
    }
    else{
      return charnum;
    }
  }
  

module.exports = caesar
