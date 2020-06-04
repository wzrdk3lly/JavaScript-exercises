const removeFromArray = function(removeArray, ...num) {
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < removeArray.length;j++){
            if(num[i] === removeArray[j]){
                removeArray.splice(j,1);
            }
        }
    }
    return removeArray;
 }

module.exports = removeFromArray



/* let i;
    let j;
  //  let newArray = [];

    for(i = 0; i < removeArray.length; i++){

        for(j = 0; j < num.length; j++){

            if(removeArray[i] === num[j]){

            removeArray.splice(i,1);
            i--;
            }
        }
    }
    return removeArray;*/