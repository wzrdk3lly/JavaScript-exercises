const sumAll = function(num1,num2) {
    if(!isValidNumber(num1,num2)){
      return "ERROR"
    }
    let sum = 0;
     if (num1 < num2){
          sum = num1;
         for(let i = num1; i < num2; i++){
             sum += (i+1);
         }
     }
     else{
        sum = num2;
       for(let i = num2; i < num1; i++){
           sum += (i+1);
       }
     }
  return sum;
 }
 
  function isValidNumber(num1,num2){
   if (typeof num1 != "number" || typeof num2 != "number"){
     return false;
   }
   else if(num1 < 0 || num2 < 0){
     return false;
   }
 
   return true;
 }

module.exports = sumAll
