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

document.addEventListener('keydown', (evt) => {
	//should accept numbers 0-9, operators, Enter and delete 
	console.log(`input1: ${input1} operator: ${operand} input2: ${input2} evaluator: ${evaluator} result: ${getResults()}`);
});

//reads btnVal and returns inputs based on operator and opposing inputs
function getInputs(btnVal){
	if(btnVal == 'AC' || btnVal == 'BackSpace'){
		console.log('A');
		return clearSelection(btnVal);
	}
	if(evaluator && !input2 && evaluator != '='){
		console.log('B');
		input2 += checkDecimal(btnVal);
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
	if(operand && checkDecimal(btnVal) && btnVal != '='){
		console.log('F');
		return input2 += checkDecimal(btnVal);
	}
	if(checkDecimal(btnVal) && btnVal != '=' && !evaluator){
		console.log('G');
		return input1 += checkDecimal(btnVal);
	}
	if (!input1 && !operand && !input2){
		return '';
	}
	return '';
}
// ^ if operand and evaluator is '=' locks in NaN state.

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

function getNums(btnVal){
	if(btnVal >= '0' || btnVal <= '9'){
		return btnVal;
	}
	return '';
}

function checkDecimal(btnVal){
	if(btnVal == '.' && !input1.includes('.') || btnVal == '.' && !input2.includes('.')){
		return btnVal;
	}
	if (getNums(btnVal)){
		return btnVal;
	}
	return '';
}

//reads btnVals and executes eraseLast() when backspace is pressed
function clearSelection(btnVal){   
	if(!operand && btnVal == 'BackSpace'){
		return removeLast(input1)			
	}
	if(operand && btnVal == 'BackSpace'){
		return removeLast(input2)
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
//last input is length of input -1.
function removeLast(input) {
	let inputArray = input.split('');
	inputArray.pop();
	return inputArray.join('');
}

//how do we look at a particular input?
// if there is is no operator and backSpace is pressed
// input1 is selected
// pseudocode:
//   if(!operand && btnVal == 'BackSpace'){
//		return removeLast(input1)			
//   }
//   if(operand && btnVal == 'BackSpace'){
//		return removeLast(input2)
//   } 
// when input is selected and index is removed,
// return new input value
// ex. before erasing input1, input1 = 2345 
// after erasing once new input1 = 234. 
// Erasing a second time would take new input1 
// value i.e 234 and remove the next value.
console.log(removeLast('hello world'))
console.log(removeLast('hello worl'))
