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
	console.log(`input1: ${input1} operand: ${operand} input2: ${input2} evaluator: ${evaluator} result: ${operate(operand)}`);
});

document.addEventListener('keydown', (evt) => {
	if (acceptedKeys(evt.key) == 'Delete' || acceptedKeys(evt.key) == 'BackSpace'){
		resultBox.textContent = `${clearSelection(evt.key)}`;
	}
	if (acceptedKeys(evt.key) == getNums(evt.key)){
		resultBox.textContent = `${getInputs(evt.key)}`;
	}
	console.log(`input1: ${input1} operator: ${operand} input2: ${input2} evaluator: ${evaluator} result: ${operate(operand)}`);
});

//reads btnVal and returns inputs based on operator and opposing inputs
function getInputs(btnVal){
	if(btnVal == 'AC' || btnVal == 'BackSpace'){
		console.log('A');
		return clearSelection(btnVal);
	}
	if(operators.includes(btnVal) && input2 || (btnVal == '=' || btnVal == 'Enter')){
		console.log('E');
		evaluator = btnVal;
		input1 = operate(operand);
		input2 = '';
		return input1;
	}
	if(getNums(btnVal) && evaluator && !input2){
		console.log('C');
		input2 += checkDecimal(btnVal);
		operand = evaluator;
		evaluator = '';
		return input2;
	}
	if(getNums(btnVal) && evaluator && !input1 && !input2 && !operand){
		console.log('D');
		return evaluator = '';
	}
	if(operators.includes(btnVal)){
		console.log('F');
		return operand = btnVal;
	}
	if(operand && checkDecimal(btnVal) && btnVal != '='){
		console.log('G');
		return input2 += checkDecimal(btnVal);
	}
	if(checkDecimal(btnVal) && btnVal != '=' && !evaluator){
		console.log('H');
		return input1 += checkDecimal(btnVal);
	}
	return '';
} 

// operand cannot be equivalent to anything but operators
//input1 cannot be equivaletn to anything but numbers

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

function acceptedKeys (btnVal){
	//if its an accepted key, return the key
	if(btnVal == 'Enter' || btnVal == 'BackSpace' || btnVal == '=' || btnVal == 'Delete' || getNums(btnVal)){
		return btnVal;
	} 
	return '' 
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
		input1 = removeLastNum(input1)
		return input1			
	}
	if(operand && btnVal == 'BackSpace'){
		input2 = removeLastNum(input2)
		return input2
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
function removeLastNum(input) {
	let inputArray = input.split('');
	inputArray.pop();
	return inputArray.join('');
}