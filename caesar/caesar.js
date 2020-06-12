const caesar = function(text, num) {
    let encrypt = '';
    for(let i = 0; i < text.length; i++){
        if(containsPunc(text.charAt(i))){
         encrypt += text.charAt(i);
        }
        else if(num > 0){
            // while(containsPunc(String.fromCharCode(text.charCodeAt(i)+num))){
            //     num++;
            // }
          encrypt += String.fromCharCode(text.charCodeAt(i)+num);
        }
        else if(num < 0){
            encrypt += String.fromCharCode(text.charCodeAt(i)-num);
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

module.exports = caesar
