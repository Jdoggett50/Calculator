const operators = ['+','-','*','/']
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';
let result = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${getInputs(evt.target.value)}`;
	}
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator} result: ${getResults()}`);
});

//reads btnVal and returns inputs based on operator and opposing inputs
function getInputs(btnVal){
	if(btnVal == 'Enter' || btnVal == 'AC' || btnVal == '='){
		console.log('A');
		return '';
	}
	if(operators.includes(btnVal)){
		//give a value to operator
		console.log('B');
		return operator = btnVal;
	}
	if(operator && getNum(btnVal)){
		//give a value to input2
		console.log('D');
		return input2 += getNum(btnVal);
	}
	if (getNum(btnVal)){
		//give a value to input1
		console.log('E');
		return input1 += getNum(btnVal);
	}
	return '';
}

//if btnVal is any operator, return the result with btnVal as operator if not, return undefined string
function getResults(){
	if ((evaluator == '=' || evaluator == 'Enter') || (evaluator != '=' || evaluator != 'Enter')){
		return operate(operator);
	} 
	return '';
}

function getNum(btnVal){
	if(btnVal >= '0' || btnVal <= '9'){
		return btnVal;
	}
	if(btnVal == '.' && input1.includes('.') && input2.includes('.')){
		return '';
	}
	return
}
//provides result based on whether an operator is present in the expression 
function operate(op){
	switch (op){
		case "+":
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
//evaluating functions
function add (num1, num2){
	let result = parseFloat(num1) + parseFloat(num2);
	return result.toFixed(2);
}
function subtract (num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2)
	return result.toFixed(2);
}
function multiply (num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2)
	return result.toFixed(2);
}
function divide (num1,num2) {
    let result = parseFloat(num1) / parseFloat(num2)
	return result.toFixed(2);
}

//reads btnVals and executes eraseLast() when backspace is pressed
function clearSelection(btnVal){
	if(btnVal == 'BackSpace' ){
		return eraseLast(getInputs(btnVal))
	}
	if(btnVal == 'AC'){
		input1 = '';
		input2 = '';
		operator = '';
		evaluator = '';
		return result = '0';
	}
	return
}

//removes last value from input
function eraseLast(input) {
	let inputArray = input.split('');
	inputArray.pop()
	return inputArray.join('')
}
//first set of operands:
// *if btnVal is AC Enter or = return '' 
// *if there are no other inputs and an operator or evaluator is picked, return ''
// *input1 is true when the value is a number 
// *operator is true when the value is an operator from the list of operators 
// *input2 is true when input1 exists and the value isn't an operator
// evaluator is true if input2 exists and the value is an operator
// result is received when the evaluator is an operator or '='
// input1 operator input2 evaluator result
//	 1 		 + 		 1	      =        2

//next set of operands:
// input1 operator input2 evaluator result
//	 2 		  		 	      =        
// when there there IS a result, input1 is set to result
// operator should then 
// don't assign operator to '=' if it isn't an operator