const reverseString = function(str) {
let stringArray = str.split('');

let reverseArray = [];
let reverseString = '';

for(let i = 0; i < stringArray.length; i++){
   reverseArray[i] = stringArray[stringArray.length-(i+1)]
}
reverseString = reverseArray.join('');

return reverseString;

}

module.exports = reverseString
