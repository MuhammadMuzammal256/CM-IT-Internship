
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function funk () {
    
rl.question('Enter first number: ', function(num1) {
rl.question('Enter second number: ', function(num2) {
    rl.question('Enter operation (+, -, *, /): ', function(op) {
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2);
        let result;

        if (op === '+') {
            result = number1 + number2;
        } else if (op === '-') {
            result = number1 - number2;
        } else if (op === '*') {
            result = number1 * number2;
        } else if (op === '/') {
            result = number1 / number2;
        } else {
            console.log('Invalid operation');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        funk();
    });
});

});
}
funk();

