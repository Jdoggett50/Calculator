const operators = ['+','-','*','/','=','^','Enter','BackSpace','Escape'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.','Enter','Backspace','Escape'];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${updateInputs(evt.target.value)}`;
	}
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator} result: ${getResults()}`);
});

document.addEventListener('keydown', (evt) => {
	if (acceptedKeys.includes(evt.key)){ 
		resultBox.textContent = `${updateInputs(evt.key)}`;
	}
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator} result: ${getResults()}`);
});

function updateInputs(btnVal){
	if(btnVal == 'AC' || (input1 == '0' && operator =='/' && input2 == '0')){
		console.log('A');
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
		return result = '0';
	} else if (!acceptedKeys.includes(btnVal)){
		console.log('B');
		return '';
	} else if (operators.includes(btnVal) && operator && input1 && input2){
		console.log('C');
		evaluator = btnVal;
		input1 = getResults();
		input2 = '';
		return input1;
	} else if (!operators.includes(btnVal) && !operator){
		console.log('D');
		input1 += checkDecimal(btnVal);
		return input1;
	} else if (evaluator && evaluator != '=' && evaluator != 'Enter' && evaluator != 'Backspace'){
		console.log('E');
		input2 += checkDecimal(btnVal);
		operator = evaluator;
		evaluator = '';
		return input2;
	} else if (!operators.includes(btnVal) && input1 && operator && btnVal != 'BackSpace'){
		console.log('F');
		evaluator = '';
		input2 += checkDecimal(btnVal);
		return input2;
	} else if (operators.includes(btnVal) != '=' && input1){
		console.log('G');
		operator = btnVal;
		return operator;
	} else
		console.log('H');
		return input1 = '';
} 

function getResults(){
	if ((evaluator == '=' || evaluator == 'Enter') || (evaluator != '=' || evaluator != 'Enter')){
		//result
		return operate(operator);
	} else 
		return '';
}

function checkDecimal (btnVal){
	if((btnVal == '.' && input1.includes('.') && !input2) || (btnVal == '.' && input2.includes ('.')) || (operators.includes(btnVal))){
		return '';
	} else 
	return btnVal;
}

function operate(op) {
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
	return result
}

function add (num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
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

// add clear single input feature 
// add decimal support- decimal support under construction

//decimal constraints:
// everytime evaluator is received from getResults, it immediately triggers the function call

// possible solutions:
//  