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

function updateInputs(btnVal){
	if(btnVal == 'AC'){
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
	} else if(!checkOperator(btnVal) && operator == ''){
		input1 += btnVal;
		return input1;
	} else if (checkOperator(btnVal) && input2 == ''){
		operator += btnVal;
		return operator;
	} else if (!checkOperator(btnVal) && input1 != '' && operator != ''){
		input2 += btnVal;
		return input2;
	} else 
		return evaluator = btnVal;
}

// else if (checkOperator && evaluator != ''){
// 		operator = evaluator;
// 		evaluator = '';
// 		input2 = '';

function getResults (btnVal){
	if(checkOperator(btnVal) && operator != '' && evaluator == '='){
		return result = operate(input1,operator,input2);
	} else if (checkOperator(btnVal) && input2 != ''){
		//change first input to value of result
		input1 = operate(input1,operator,input2)
		//operator to evaluator and clear evaluator
		input2 = '';
		operator = evaluator;
		evaluator = '';
	}
		//should update the value of input1 to the result
	//return input1 = operate(input1,operator,input2)
	 else
		return result = 0;
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

