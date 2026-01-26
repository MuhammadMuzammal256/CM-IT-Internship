const readline = require('readline');

console.log("------Tip Calculation-----");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function show() {
    rl.question("Enter the Calcuis ",function(cal){
        let calcuis = parseFloat(cal);
        let forh = (9/5)*calcuis +32;
        console.log(`Fahrenheit is : ${forh}`);
        show();
    })
}        show();