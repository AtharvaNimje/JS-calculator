let screenContent = document.querySelector('.screen h1');

let opButtons = Array.from(document.querySelectorAll('.operator'));
let numButtons = Array.from(document.querySelectorAll('.numbers'));
let equalButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');
let undoButton = document.querySelector('#undo');

let value = '';
let operatorArr = [];

for (button of numButtons) {
    button.addEventListener('click', (e) => {
        let num = e.target.textContent;
        if(num === '.'){
            if(!value.includes('.')) {
                value += num;
            }
        } else {
            value += num;
        }
        console.log(value);
        screenOp(value);
    })
}

for (button of opButtons) {
    button.addEventListener('click', (e) => {
        let operator = e.target.textContent;
        operatorArr.push(value, operator);
        value = '';
        console.log(operatorArr);
    })
}

equalButton.addEventListener('click', (e) => {
    operatorArr.push(value);

    while (operatorArr.length >= 3) {
        result = operate(Number(operatorArr[0]), operatorArr[1], Number(operatorArr[2]));
        value = '';
        operatorArr.splice(0, 3);
        operatorArr.splice(0, 0, result)
        console.log(operatorArr);
    }
    screenOp(result);
    operatorArr = [];
});

clearButton.addEventListener('click', () => {
    window.location.reload();
})

undoButton.addEventListener('click', ()=> {
    value = value.slice(0,-1);
    console.log(value);
    screenOp(value);
})

function screenOp(num) {
    screenContent.innerHTML = num;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {
    let r = 0;
    switch (op) {
        case '+':
            r = add(num1, num2);
            
            break;
        case '-':
            r = subtract(num1, num2);
            break;
        case '*':
            r = multiply(num1, num2);
            break;
        case '/':
            r = num2!==0 ? divide(num1, num2): 'ERROR';
            break;
        default:
            console.log('Invalid operator');
    }
    return r;
}

/*
[12, +, 13, -, 8]  ===> [25, -, 8]

result = operate(operationArr[0], operationArr[1], operationArr[2]);
operationArr.splice(0, 3);
operationArr.splice(0,0, result)
*/