const operators = ['+','-','*','/','=','^'];
let input1 = '';
let operator = '';
let input2 = '';
const selectionWrapper = document.querySelector('#selection-wrapper')

selectionWrapper.addEventListener('click', (evt) => {
	console.log(`button clicked is ${updateInputs(evt.target.value)}`);
	console.log(`input1 = ${input1}`,`operator = ${operator}`, `input2 = ${input2}`);
	console.log(`result = ${operate(input1,operator,input2)}`);
})

function updateInputs(btnVal){
	if(!checkOperator(btnVal) && btnVal == 'AC'){
		input1 = '';
		operator = '';
		input2 = '';
	} else if(!checkOperator(btnVal) && operator == ''){
		input1 += btnVal
		return input1
	} else if (checkOperator(btnVal)){
		operator += btnVal
		return operator
	} else if (input1 != '' && operator != ''){
		input2 += btnVal
		console.log(input2)
		return input2
	}
}

//> if input1 exists and operator exists-
//  input2 should be assigned value that cannot be another operator 
//> input2 = btn.target.value if it's true that input1 exists and operate exists
//> populate result only if '=' after input2
//> set input1 to be equal to the result of each expression in the case-
//  of muliple operators after initial expression
// result should be 0 unless 1 input is placed and submitted.
// if (input2 != 0) } input2 = btnValue 


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
function checkOperator(btnVal) {
	let isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnVal){
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

