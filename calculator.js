//there will be user input - not sure how we will receive it yet
const inputs = document.querySelector('#numbers-container');
inputs.addEventListener('click', el => el.target.value)


let input1 = '4'
let input2 = '20'
let operator = '+'

function operate (num1, operator, num2) {
	let expression = [num1,operator,num2];
	if (expression.includes('+')){
		input1 = add(parseInt(num1),parseInt(num2));
	} else if (expression.includes('-')) {
		input1 = subtract(num1,num2);
	} else if (expression.includes('*')) {
		input1 = multiply(num1,num2);
	} else if (expression.includes('/')) {
		input1 = divide(num1,num2);
	} else 
		input1 = powered(num1,num2);
	return input1
}

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

