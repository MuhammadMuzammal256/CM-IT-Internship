// Temperature Converter Task - Using formula F = (C × 9/5) + 32 ; C = (F - 32) × 5/9

console.log("Temperature Converter Task");
console.log("----------------------------");
function tempConverterF() {
 let C = 12;
    let F = (C * 9/5) + 32;
    console.log("Celsius to Fahrenheit: " + F);
}
   tempConverterF();
   console.log("----------------------------");
function tempConverterC(f) {
    let c = (f - 32) * 5/9;
    console.log("Fahrenheit to Celsius:" + c.toFixed(6));  

} 

tempConverterC(54);
tempConverterC(14);
tempConverterC(23);

console.log("----------------------------");