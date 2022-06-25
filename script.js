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

function operate(op, num1, num2) {
    switch(op) {
        case 'A':
            add(num1, num2);
            break;
        case 'S': 
            subtract(num1, num2);
            break;
        case 'M':
            multiply(num1, num2);
            break;
        case 'D':
            divide(num1, num2);
        default:
            console.log('Invalid operator');
    }
}