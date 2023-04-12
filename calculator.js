const operators = ['+','-','*','/','=','^'];
let operator = '';
let input1 = '';
let input2 = '';

//get variable from operate and store it in a variable
//btn values are going to be the inputs
//how can we use evt.target.value to supply multiple numbers in a data type
//handle the case of multiple operators with no input2
//check if operator is placed before second input, if not, don't evaluate unless its '+''+'
//if another num value is placed after the completion of an expression, use diffNum as input2 and expression result will be set to input1

const selectionWrapper = document.querySelector('#selection-wrapper')
selectionWrapper.addEventListener('click', (evt) => {
	let input = evt.target.value;
	if(!checkOperator(input) && input == 'AC'){
		console.log(input = '')
	} else if(!checkOperator(input)){
		console.log(input)
		// input = evt.target.value;
	}
	input = checkOperator(input)
})

function checkInput(input){
	if(checkOperator(input)){
		return input = 0;
	} 
	return input
}

//initial result value
function operate (num1, operator, num2) {
	let expression = [num1,operator,num2];
	if (expression.includes('+')){
		result = add(num1,num2);
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

//use this for checking input values for operators
function checkOperator(btnInput) {
	const isOperator = false;
	//check value in array, return true if its there, otherwise, return false
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnInput){
			operator = operators[i]
			//return operator = operators[i];
		}
	}
	return isOperator
}	//console.log(checkOperator(input))

function add (num1, num2) {
    return parseInt(num1) + parseInt(num2);
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
    return num1 ** num2;
}

