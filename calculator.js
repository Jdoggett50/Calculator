const operators = ['+','-','*','/','=','^'];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#selection-wrapper')

btns.addEventListener('click', (evt) => {
	console.log(`button clicked is ${updateInputs(evt.target.value)}`);
	console.log(`input1 = ${input1}`,`operator = ${operator}`, `input2 = ${input2}`,`evaluator = ${evaluator}`);
	console.log(`result = ${(getResults(evt.target.value))}`);
})

//evaluator needs to set the operator when all values are in their fields.
function updateInputs(btnVal){
	if(btnVal == 'AC'){
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
	} else if (checkOperator(btnVal) && operator && input1 && input2){
		console.log('A')
		evaluator = btnVal;
	}
	else if (!checkOperator(btnVal) && !operator){
		console.log('B')
		input1 += btnVal;
	} else if (evaluator && evaluator != '='){
		console.log('C')
		input1 = getResults();
		operator = evaluator;
		evaluator = '';
		input2 = '';
	} else if (!checkOperator(btnVal) && input1 && operator){
		console.log('D')
		input2 += btnVal
	} else if (checkOperator(btnVal) != '=' && input1){
	 	console.log('E')
	 	operator = btnVal;
	}
}

function getResults(){
	if (evaluator){
		result = operate(input1,operator,input2);
		return result;
	} 
}

//  of muliple operators after initial expression
// result should be 0 unless 1 input is placed and submitted.
// if (input2 != 0) } input2 = btnValue 

//maybe refactor with a class?
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
	return result
}

//returns operator or false
function checkOperator(btnVal) {
	let isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnVal){
			return isOperator = operators[i];
		}
	}
	return isOperator
}

//placed in operate to evaluate expressions
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

