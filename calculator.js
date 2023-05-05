const operators = ['+','-','*','/']
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';
// let result = '';

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
	// if(evaluator && operator){
	// 	operator = evaluator;
	// 	return operator;
	// }
	if(operators.includes(btnVal) && input2){
		console.log('A')
		evaluator = btnVal;
		input1 = getResults(btnVal)
		input2 = '';
		return input1;
	}
	if(operators.includes(btnVal) && !input2){
		console.log('B');
		return operator = btnVal;
	}
	if(getNum(btnVal) && operator){
		console.log ('C');
		evaluator = '';
		return input2 += getNum(btnVal);
	}
	if (getNum(btnVal) && !operator){
		console.log('D');
		return input1 += getNum(btnVal);
	}
	return '';
}

//if btnVal is any operator, return the result if not, return undefined string
function getResults(btnVal){
	if (operators.includes(btnVal) || btnVal == 'Enter'){
		return operate(btnVal);
	} 
	return '';
}

function getNum(btnVal){
	if(btnVal >= '0' || btnVal <= '9'){
		return btnVal;
	}
	if((btnVal == '.' && input1.includes('.') && input2.includes('.'))){
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
	}
	return
}

//removes last value from input
function eraseLast(input) {
	let inputArray = input.split('');
	inputArray.pop()
	return inputArray.join('')
}