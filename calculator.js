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
	if(evaluator && !input2){
		input2 += acceptedInputs(btnVal);
		operand = evaluator;
		evaluator = '';
		return input2;
	}
	if(operators.includes(btnVal) && input2 || (btnVal == '=' || btnVal == 'Enter')){
		console.log('B');
		evaluator = btnVal;
		input1 = operate(operand);
		input2 = '';
		return input1;
	}
	if(evaluator == '=' || evaluator == 'Enter'){
		console.log('C');
		return result = operate(operand);
	}
	if(operators.includes(btnVal)){
		console.log('D');
		return operand = btnVal;
	}
	if(operand && acceptedInputs(btnVal) && btnVal != '='){
		console.log('E');
		return input2 += acceptedInputs(btnVal);
	}
	if(acceptedInputs(btnVal) && btnVal != '=' && !evaluator){
		console.log('F');
		return input1 += acceptedInputs(btnVal);
	}
	return '';
}

//evaluating functions
function add (num1, num2){
	let result = parseFloat(num1) + parseFloat(num2);
	return result.toFixed(2);
}
function subtract (num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2);
	return result.toFixed(2);
}
function multiply (num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2);
	return result.toFixed(2);
}
function divide (num1,num2) {
    let result = parseFloat(num1) / parseFloat(num2);
	return result.toFixed(2);
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

// //if btnVal is any operator, return the result with btnVal as operator if not, return undefined string
// function getResults(){
// 	if (evaluator == '=' || evaluator == 'Enter' || (evaluator != '=' || evaluator != 'Enter')){
// 		return operate(operand);
// 	} 
// 	return '';
// }

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

//removes last value from input
function eraseLast(input) {
	let inputArray = input.split('');
	inputArray.pop();
	return inputArray.join('');
}
//first set of operands:
// *if btnVal is backspace or AC - call clearSelection(btnVal)    
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

//when the evaluator exists 
//result should either be assigned to the input 
// (in the case of an operator and not equals) or (in the case of
// enter and equals)