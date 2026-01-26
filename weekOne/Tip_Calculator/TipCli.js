const readline = require('readline');

console.log("------Tip Calculation-----");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function show() {
    rl.question("Enter the bill amount: ", function (bill) {
        let mybill = parseFloat(bill);

        rl.question("Enter the tip percentage you would like to give: ", function (tipPercent) {
            let tip = parseFloat(tipPercent);


            let tipAmount = (mybill * tip) / 100;
            let totalAmount = mybill + tipAmount;

            console.log(`Tip Amount: ${tipAmount}`);
            console.log(`Total amount to pay: ${totalAmount}`);

            show(); 
        });
    });
}

show();
