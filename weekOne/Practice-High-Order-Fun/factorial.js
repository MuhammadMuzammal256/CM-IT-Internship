const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showfun(){
rl.question('Enter first number: ', function(num1) {

    try{
    let number1 = parseFloat(num1);
    if (isNaN(number1) || !Number.isInteger(number1) || number1 < 0) {
        console.log("Please enter a valid number.");
        return showfun()    ;
    }

        
  let fact = 1;
  
    for (let i = 1; i <= number1; i++) {
        fact *= i;
    }   
    console.log(`Factorial of ${number1} is: ${fact}`);
    showfun();
}catch(error){
    console.log("Error", error);
}





});}

showfun();