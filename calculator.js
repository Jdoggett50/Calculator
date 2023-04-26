const operators = ['+','-','*','/','=','^'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.'];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#numbers-container')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${updateInputs(evt.target.value)}`
	}
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
		input1 = getResults();
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
	if (evaluator){
		result = operate(input1,operator,input2);
		return result;
	}
}

function operate (num1, operator, num2) {
	let expression = [num1,operator,num2];
	if (expression.includes('+')){
		result = add(num1,num2);
	} else if (expression.includes('-')) {
		result = subtract(num1,num2);
	} else if (expression.includes('*')) {
		result = multiply(num1,num2);
	} else if (expression.includes('/')) {
		result = divide(num1,num2);
	} else 
		result = powered(num1,num2);
	return result;
}

function add (num1, num2) {
    return parseInt(num1) + parseInt(num2);
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
function powered (num1,num2){
    return num1 ** num2;
}

//decimals can only exist once in a number
//look at number and see if it has a decimal, if not return number
//decimals are usually only 2 integers long (tenths and hundreths place).
//values after decimals are only numbers, not operators.

// add clear single input feature 
// add evaluate on enter feature
// add decimal support
//included the array.includes method to check for acceptedKeys and operators