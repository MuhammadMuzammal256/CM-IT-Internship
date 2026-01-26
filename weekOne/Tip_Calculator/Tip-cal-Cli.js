const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
function calculateTip() {
    console.log("\n");
    rl.question('Enter bill amount: ', (billAmount) => {
        rl.question('Enter tip percentage: ', (tip) => {
        let bill = Number(billAmount);
        let Totaltip = (bill * tip)/100;
        console.log(`your tip Amount is:${Totaltip.toFixed(2)}`);
        let totalBill = bill + Totaltip;
        console.log(`Your total bill amount is: ${totalBill}`);
        calculateTip();
    });

 });
}
   calculateTip();