const operators = ['+','-','*','/','=','^'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','='];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#selection-wrapper');
const resultBox = document.querySelector('.result > p');


btns.addEventListener('click', evt => {
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${updateInputs(evt.target.value)}`
	}
});
document.addEventListener('keydown', (evt) => {
	let checkedKeys = checkAcceptedKeys(evt.key);
	resultBox.textContent = `${updateInputs(checkedKeys)}`
});

function updateInputs(btnVal){
	if(btnVal == 'AC' || (input1 == '0' && operator =='/' && input2 == '0')){
		console.log('A')
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
		return result = 0;
	} else if (checkOperator(btnVal) && operator && input1 && input2){
		console.log('B')
		evaluator = btnVal;
		input1 = getResults();
		input2 = '';
		return input1;
	} else if (!checkOperator(btnVal) && !operator){
		console.log('C')
		input1 += btnVal;
		return input1;
	} else if (evaluator && evaluator != '='){
		console.log('D')
		input2 += btnVal;
		operator = evaluator;
		evaluator = '';
		return input2;
	} else if (!checkOperator(btnVal) && input1 && operator){
		console.log('E')
		evaluator = '';
		input2 += btnVal;
		return input2;
	} else if (checkOperator(btnVal) != '=' && input1){
		console.log('F')
		operator = btnVal;
		return operator;
	}
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

function checkOperator(btnVal) {
	let isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnVal){
			return isOperator = operators[i];
		}
	}
	return isOperator;
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

function checkAcceptedKeys(btnVal){
	let isAccepted = false;
	for(let i = 0; i < acceptedKeys.length; i++){
		if(acceptedKeys[i] == btnVal){
			return isAccepted = acceptedKeys[i];
		}
	}
	return 
}