const operators = ['+','-','*','/','=','^'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.'];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${updateInputs(evt.target.value)}`
	}
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator} `)
});

document.addEventListener('keydown', (evt) => {
	if (acceptedKeys.includes(evt.key)){ 
		resultBox.textContent = `${updateInputs(evt.key)}`
	}
});

function updateInputs(btnVal){
	if(btnVal == 'AC' || (input1 == '0' && operator =='/' && input2 == '0')){
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
		return result = 0;
	} else if (!acceptedKeys.includes(btnVal)){
		return '';
	} else if (operators.includes(btnVal) && operator && input1 && input2){
		evaluator = btnVal;
		input1 = getResults(operator);
		input2 = '';
		return input1;
	} else if (!operators.includes(btnVal) && !operator){
		input1 += btnVal;
		return input1;
	} else if (evaluator && evaluator != '='){
		input2 += btnVal;
		operator = evaluator;
		evaluator = '';
		return input2;
	} else if (!operators.includes(btnVal) && input1 && operator){
		evaluator = '';
		input2 += btnVal;
		return input2;
	} else if (operators.includes(btnVal) != '=' && input1){
		operator = btnVal;
		return operator;
	} else
		return input1 = '';
} 

function getResults(){
	if (evaluator.includes('.')){
		result = operate(operator);
		return result.toFixed(2);
	}
}

function operate (op) {
	switch(op) {
		case '+':
			add(input1,input2);
			break;
		case '-':
			subtract(input1,input2);
			break;
		case '*':
			multiply(input1,input2);
			break;
		case '/':
			divide(input1,input2);
	}
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
// add evaluate on enter feature
// add decimal support

//constraints:
// periods cannot used more than once in a given input
// can't remove it from acceptedKeys array, eventListeners would bypass
// period cannot be an operator
// toFixed(2) is causing 00 to show up when clean evaluation is made