const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});     

function convertCtoF() {
    rl.question('Enter temperature in Celsius: ', (celsius) => {
        try {
            let C = parseFloat(celsius);

            if (isNaN(C)) {
                throw "Please enter a valid number!";
            }

            let F = (C * 9/5) + 32;
            console.log(`Celsius to Fahrenheit: ${F}`);
        } catch (error) {
            console.log("Errors:", error);
        }

        showMenu(); 
    });
}

function convertFtoC() {

rl.question('Enter temperature in Fahrenheit: ', (fahrenheit) => {
    let F = parseFloat(fahrenheit);
    let C = (F - 32) * 5/9;
    console.log(`Fahrenheit to Celsius: ${C.toFixed(6)}`);
   showMenu();
}
);}

function showMenu() {
    console.log('Temperature Converter');
    console.log('1. Celsius to Fahrenheit');
    console.log('2. Fahrenheit to Celsius');
    console.log('3. Exit');
    rl.question('Choose an option (1-3): ', (option) => {
        if(option === '1'){
            convertCtoF();
        }
        if(option === '2') {
            convertFtoC();
        }
        if(option === '3') {
            rl.close();
            console.log('Exiting Temperature Converter. Goodbye!');
        }

     
    }




);
}
showMenu();