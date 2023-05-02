const operators = ['+','-','*','/','=','^','Enter'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.','Enter'];
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
	// if(){

	// }
	if(operator){
		console.log ('c');
		return input2 += checkDecimal(btnVal);
	}
	if(operators.includes(btnVal) && input1){
		console.log('d');
		return operator = btnVal;
	}
	if (!operator && !input2){
		console.log('e');
		return input1 += checkDecimal(btnVal)
	}
	console.log('bad logic')
	return ''
}

//if btnVal is any operator, return the result if not, return undefined string
function getResults(btnVal){
	if (operators.includes(btnVal)){
		return operate(operator);
	} 
	return '';
}
//when btnVal is '.' and input1 or input2 includes a '.' return undefined string.
function checkDecimal(btnVal){
	if((btnVal == '.' && input1.includes('.') && input2.includes('.')) || (operators.includes(btnVal))){
		return '';
	} 
	return btnVal;
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
	}
	return
}
//removes last value from input
function eraseLast(input) {
	let inputArray = input.split('');
	inputArray.pop()
	return inputArray.join('')
}