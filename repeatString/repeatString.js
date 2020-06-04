const repeatString = function(str,num) {
    let strRepeat ='';

    if(num < 0){
        return 'ERROR'
    }
    
    for(let i = 0; i < num; i++){
        strRepeat += str;
    }
    return strRepeat;
}

module.exports = repeatString
