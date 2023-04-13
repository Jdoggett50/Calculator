const operators = ['+','-','*','/','=','^'];
let input1 = '';
let operator = '';

//input2 = btn.target.value if it's true that input1 exists and operate exists
//if operator is clicked, update operator variable

const selectionWrapper = document.querySelector('#selection-wrapper')
selectionWrapper.addEventListener('click', (evt) => {
	let btnValue = evt.target.value;
	//clear if false and value = 'AC'
	console.log(`button clicked is ${numOrOperator(btnValue)}`);
	console.log('input2 = 3', `operator = ${operator}`);
	console.log(`result = ${operate(input1,operator,3)}`);	
})

function numOrOperator(btnValue){
	if(!checkOperator(btnValue) && btnValue == 'AC'){
		input1 = '0';
		operator = '0';
		input2 = '0'; 
		//div element to be set to 0 as well
	//set input1 as long as value isn't operator
	} else if(!checkOperator(btnValue)){
		//return this for placement to input
		// console.log(`number is true, operator is false: ${input1}`)
		input1 += btnValue
		return input1
	} else if (checkOperator(btnValue)) {
		//return this for placement to operator
		operator += btnValue
		// console.log(`number is false, operator is true: ${operator}`)
		return operator
		//console.log(`operator is true: ${operator}`)
	}
}


//holds initial result value
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
function checkOperator(btnValue) {
	let isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnValue){
			//operator = operators[i]
			return isOperator = operators[i];
		}
	}
	return isOperator
} //console.log(checkOperator(input))

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

