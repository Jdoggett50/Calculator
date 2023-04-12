const operators = ['+','-','*','/','=','^'];

//input2 = btn.target.value if it's true that input1 exists and operate exists
//if operator is clicked, update operator variable

const selectionWrapper = document.querySelector('#selection-wrapper')
selectionWrapper.addEventListener('click', (evt) => {
	let btnValue = evt.target.value;
	//clear if false and value = 'AC'
	if(!checkOperator(btnValue) && btnValue == 'AC'){
		console.log(btnValue = '')
		//div element to be set to '' as well
	//set input1 as long as value isn't operator
	} else if(!checkOperator(btnValue)){
		let input1 = btnValue;
		console.log(input1)
	}
})

//
function checkInput(input){
	if(checkOperator(input)){
		return input = 0;
	} 
	return input
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
function checkOperator(btnInput) {
	const isOperator = false;
	for(let i = 0; i < operators.length; i++){
		if(operators[i] == btnInput){
			//operator = operators[i]
			return operator = operators[i];
		}
	}
	return isOperator
} console.log(checkOperator(input))

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

