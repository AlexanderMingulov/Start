const calcTwoValue = (a, b, operation) => {
    switch(operation) {
        case "+": 
            console.log(`${a} + ${b} =`, a + b);
            break;
        case "*":
            console.log(`${a} * ${b} =`, a * b);
            break;
        case "/":
            console.log(`${a} / ${b} =`, a / b);
            break;
        case "-":
            console.log(`${a} - ${b} =`, a - b);
            break;
        default: 
            console.log('unknown operation, enter "+,*,/,-"');
    }
}

const convValue = (a, type) => {
    switch(type) {
        case "bool":
            console.log(`convert ${a} to boolean =`, Boolean(a));
            break;
        case "str":
            console.log(`convert ${a} to string =`, String(a));
            break;
        case "int":
            console.log(`convert ${a} to int =`, parseInt(a, 10));
            break;     
    }
}

const one = 1;
const two = '2';
const isTrusty = true;

calcTwoValue(isTrusty, two, '+'); // "true2"
calcTwoValue(one, two, '+'); // "12"
calcTwoValue(one, isTrusty, '+'); // 2
calcTwoValue(isTrusty, two, '*'); // 2 
calcTwoValue(one, two, '*'); // 2 
calcTwoValue(one, isTrusty, '*'); // 1 
calcTwoValue(isTrusty, two, '/'); // 0.5 
calcTwoValue(one, two, '/'); // 0.5 
calcTwoValue(one, isTrusty, '/'); // 1
calcTwoValue(isTrusty, two, '-'); // -1 
calcTwoValue(one, two, '-'); // -1
calcTwoValue(one, isTrusty, '-'); // 0

convValue(two, 'int') // 2
convValue(one, 'str') // "1"
convValue(one, 'bool') // true
