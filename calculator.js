const operators = ['+','-','*','/']
let input1 = '';
let operand = '';
let input2 = '';
let evaluator = '';
let result = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${getInputs(evt.target.value)}`;
	}
	console.log(`input1: ${input1} operand: ${operand} input2: ${input2} evaluator: ${evaluator} result: ${result}`);
});

//reads btnVal and returns inputs based on operator and opposing inputs
function getInputs(btnVal){
	if(btnVal == 'AC' || btnVal == 'BackSpace'){
		console.log('A');
		return clearSelection(btnVal);
	}
	if(evaluator && !input2 && evaluator != '='){
		console.log('B');
		input2 += acceptedInputs(btnVal);
		operand = evaluator;
		evaluator = '';
		return input2;
	}
	if(evaluator && !input1 && !input2 && !operand){
		return evaluator = '';
	}
	if(operators.includes(btnVal) && input2 || (btnVal == '=' || btnVal == 'Enter')){
		console.log('C');
		evaluator = btnVal;
		input1 = operate(operand);
		input2 = '';
		return input1;
	}
	if(evaluator == '=' || evaluator == 'Enter'){
		console.log('D');
		return result = operate(operand);
	}
	if(operators.includes(btnVal)){
		console.log('E');
		return operand = btnVal;
	}
	if(operand && acceptedInputs(btnVal) && btnVal != '='){
		console.log('F');
		return input2 += acceptedInputs(btnVal);
	}
	if(acceptedInputs(btnVal) && btnVal != '=' && !evaluator){
		console.log('G');
		return input1 += acceptedInputs(btnVal);
	}
	if (!input2 && !operand && !input2){
		return '';
	}
	return '';
}

//evaluating functions
function add (num1, num2){
	let result = parseFloat(num1) + parseFloat(num2);
	if (num1.includes('.') || num2.includes('.')){
		return result.toFixed(2)
	}
	return result;
}
function subtract (num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2);
	if (num1.includes('.') || num2.includes('.')){
		return result.toFixed(2)
	}
	return result;
}
function multiply (num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2);
	if (num1.includes('.') || num2.includes('.')){
		return result.toFixed(2)
	}
	return result;
}
function divide (num1,num2) {
    let result = parseFloat(num1) / parseFloat(num2);
	if (num1.includes('.') || num2.includes('.')){
		return result.toFixed(2)
	}
	return result;
}

//provides result based on whether an operator is present in the expression 
function operate(op){
	switch (op){
		case '+':
			result = add(input1,input2);
			break;
		case '-':
			result = subtract(input1,input2);
			break;
		case '*':
			result = multiply(input1,input2);
			break;
		case '/':
			result = divide(input1,input2);
	}
	return result.toString();
}

function acceptedInputs(btnVal){
	if(btnVal == '.' && input1.includes('.') || btnVal == '.' && input2.includes('.')){
		return '';
	}
	if(btnVal >= '0' || btnVal <= '9'){
		return btnVal;
	}
	return
}

//reads btnVals and executes eraseLast() when backspace is pressed
function clearSelection(btnVal){
	if(btnVal == 'BackSpace' ){
		return eraseLast(getInputs(btnVal))
	}
	if(btnVal == 'AC'){
		input1 = '';
		input2 = '';
		operand = '';
		evaluator = '';
		return result = '';
	}
	return
}
//if either integer contains a decimal point, result should
// reflect two decimal places

// place whole input inside of eraseLast(argument) when the 
//below notes are true
function eraseLast(input) {
	let inputArray = input.split('');
	inputArray.pop();
	return inputArray.join('');
}

//how do we look at a particular input?
// if operator exists, logically we are either finishing or editing input2 
// if no operator exists logically we are in input2
// if input1 exists and not input2 logically we are in operator