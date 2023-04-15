const operators = ['+','-','*','/','=','^'];
let input1 = '';
let operator = '';
let input2 = '';

const selectionWrapper = document.querySelector('#selection-wrapper')
selectionWrapper.addEventListener('click', (evt) => {
	let btnValue = evt.target.value;
	console.log(`button clicked is ${numOrOperator(btnValue)}`);
	console.log('input2 = 3', `operator = ${operator}`);
	console.log(`result = ${operate(input1,operator,3)}`);
})

function numOrOperator(btnValue){
	if(!checkOperator(btnValue) && btnValue == 'AC'){
		input1 = '0';
		operator = '';
		//doesn't exist yet
		input2 = '0'; 
	} else if(!checkOperator(btnValue)){
		input1 += btnValue
		return input1
	} else if (checkOperator(btnValue)) {
		operator += btnValue
		return operator
	}
}

//> if input1 exists and operator exists-
//  input2 should be assigned value that cannot be another operator 
//> input2 = btn.target.value if it's true that input1 exists and operate exists
//> populate result only if '=' after input2
//> set input1 to be equal to the result of each expression in the case-
//  of muliple operators after initial expression

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

//returns operator or false
function checkOperator(btnValue) {
	let isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnValue){
			return isOperator = operators[i];
		}
	}
	return isOperator
}

//placed in operate to evaluate expressions
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

