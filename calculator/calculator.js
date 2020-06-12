function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1,num2) {
	return num1 - num2;
	
}

function sum (arr) {
	return arr.reduce(function (total, item) {
		return total + item;
	},0)
}

function multiply (arr) {
	if(arr[0] === undefined){
		return 0;
	}
	return arr.reduce((product, curr) => {
		return product * curr;
	});
}

function power(base,power) {
	let final = 1;
	for(let i = 0; i<power; i++){
		final *= base;
	}
	return final;
}
// Could have used math.pow()  :( so simple

function factorial(num) {
	let factorial = 1;
	if(num === 0){
		return factorial;
	}

	for(let i = 0; i < num; i++){
		factorial *= (num - i);
	}
	return factorial;

}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}