const fibonacci = function(num) {
    let input = +(num);
    let fib = 0;
    let arrFib = [1,1];
  
    if(input < 0){
    return 'OOPS';
    }
    else{
    for( let i = 0; i < 100; i++){
      arrFib.push(arrFib[i]+arrFib[i +1]);
    }
    }
    
    return fib = arrFib[input -1];
  }
module.exports = fibonacci
