function Calculator(a,b) {
console.log("Simple Calculator Task");
console.log("----------------------------");
   console.log("Addition:" + (a+b));

 function subtraction(a, b) { 
    if (a > b) {
        console.log("Subtraction: " + (a - b));
    } else {
        console.log("Error");
    }
}

    subtraction(a,b);
  


   console.log("Multiplication:" + (a*b));


 function Division(a, b) { 
    if (a > b) {
        console.log("Division: " + (a / b));
    } else {
        console.log("Error");
    }
}       
Division(a,b);
   console.log("----------------------------");
}



Calculator(1,5);
Calculator(10,2);
Calculator(8,4);
Calculator(20,25);
Calculator(100,50);