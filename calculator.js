//there will be user input - not sure how we will receive it yet

let num1 = '4'
let num2 = '20'
let operator = '+'

function operate (num1, operator, num2) {
	let result = '';
	let expression = [num1,operator,num2];
	if (expression.includes('+')){
		result = add(parseInt(num1),parseInt(num2));
	} else if (expression.includes('-')) {
		result = subtract(num1,num2);
	} else if (expression.includes('*')) {
		result = multiply(num1,num2);
	} else if (expression.includes('/')) {
		result = divide(num1,num2);
	} else 
		result = powered(num1,num2);
	return result
}

// initial var is represented by num1
let tempVar = operate(num1, operator, num2)
console.log(tempVar)
console.log(operate(tempVar,operator,num2))

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1,num2) {
    return num1 / num2;
}

function powered (num1,num2){
    return num1 ** num2
}

