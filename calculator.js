const operators = ['+','-','*','/']
let input1 = '';
let operand = '';
let input2 = '';
// let evaluator = ''; evaluator: ${evaluator}
let result = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${getInputs(evt.target.value)}`;
	}
	console.log(`input1: ${input1} operand: ${operand} input2: ${input2} result: ${result}`);
});

document.addEventListener('keydown', (evt) => {
	console.log(checkDecimal(evt.key))
	resultBox.textContent = getInputs(evt.key);
	console.log(`input1: ${input1} operator: ${operand} input2: ${input2} result: ${operate(operand)}`);
});

function getInputs(btnVal){
	if(btnVal == 'AC' || btnVal == 'BackSpace'){
		console.log('A');
		return clearSelection(btnVal);
	}  
	if(operand && operators.includes(btnVal)){
		console.log('B');
		operand = btnVal;
		input2 = '';
		input1 = result.toString();
		return result;
	}
	if(operators.includes(btnVal)){
		console.log('C');
		return operand = btnVal;
	}	
	if(btnVal == 'Enter' || btnVal == '='){
		console.log('D');
		input1 = result.toString();
		return result
	}
	if(operand && acceptedKeys(btnVal)){
		console.log('E');
		return input2 += acceptedKeys(btnVal);
	}
	if(acceptedKeys(btnVal)){
		console.log('F');
		return input1 += acceptedKeys(btnVal);
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

function acceptedKeys(btnVal){
	//if its an accepted key, return the key
	if(getNums(btnVal) || checkDecimal(btnVal)){
		return btnVal;
	}
	if(btnVal == 'Enter' || btnVal == 'BackSpace' || btnVal == '=' || btnVal == 'Delete'){
		return btnVal;
	} 
	return '' 
}
function getNums(btnVal){
	if(btnVal >= 0 || btnVal <= 9){
		return btnVal;
	} else 
	return '';
}

// function checkDecimal(btnVal){
// 	if (btnVal == '.' && input2.includes('.')){
// 		return '';
// 	} else if(btnVal == '.' && input1.includes('.')){
// 		return '';
// 	}  else
// 	return btnVal;
// }
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