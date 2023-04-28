const operators = ['+','-','*','/','=','^'];
const acceptedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.'];
let input1 = '';
let operator = '';
let input2 = '';
let evaluator = '';

const btns = document.querySelector('#selection-wrapper')
const resultBox = document.querySelector('.result > p');

btns.addEventListener('click', evt => {
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator} `)
	if (evt.target.classList.contains('button')){
		resultBox.textContent = `${updateInputs(evt.target.value)}`
	}
	console.log(`input1: ${input1} operator: ${operator} input2: ${input2} evaluator: ${evaluator}`)
});

document.addEventListener('keydown', (evt) => {
	if (acceptedKeys.includes(evt.key)){ 
		resultBox.textContent = `${updateInputs(evt.key)}`
	}
});

function updateInputs(btnVal){
	if(btnVal == 'AC' || (input1 == '0' && operator =='/' && input2 == '0')){
		console.log('A')
		input1 = '';
		operator = '';
		input2 = '';
		evaluator = '';
		return result = 0;
	} else if (!acceptedKeys.includes(btnVal)){
		console.log('B')
		return '';
	} else if (operators.includes(btnVal) && operator && input1 && input2){
		console.log('C')
		evaluator = btnVal;
		input1 = getResults();
		input2 = '';
		return input1;
	} else if (!operators.includes(btnVal) && !operator){
		console.log('D')
		input1 += checkDecimal(btnVal);
		return input1;
	} else if (evaluator && evaluator != '='){
		console.log('E')
		input2 += checkDecimal(btnVal);
		operator = evaluator;
		evaluator = '';
		return input2;
	} else if (!operators.includes(btnVal) && input1 && operator){
		console.log('F')
		evaluator = '';
		input2 += checkDecimal(btnVal);
		return input2;
	} else if (operators.includes(btnVal) != '=' && input1){
		console.log('G')
		operator = btnVal;
		return operator;
	} else
		console.log('H')
		return input1 = '';
} 

function getResults(){
	if (evaluator){
		result = operate(operator)
		return result
	}
}
//works for decimals
function checkDecimal (btnVal){
	if(btnVal == '.' && input1.includes('.') && !input2){
		return ''
	} else if (btnVal == '.' && input2.includes ('.')){
		return ''
	} else if (operators.includes(btnVal)){
		console.log('CD')
		return ''
	} else 
	return btnVal
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
// add clear single input feature 
// add evaluate on enter feature
// add decimal support

// possible solutions:
//  return nothing when a decimal is pressed and input1 or input2 includes a decimal

//decimal constraints:
// first iteration works with decimal, second iteration works with decimal,
// assignment from evaluator to input1 works, assignment to input2 works as long as-
// the input isn't a decimal