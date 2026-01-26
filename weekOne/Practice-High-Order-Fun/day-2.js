console.log("------------------");
console.log("High Order Functions - Day 2");

function myMap(){
    console.log("-------Map--------");
    let marks = [10, 20, 30, 40, 50];
    let newMarks = marks.map(function(mark){
        return mark + 5;
    });
    console.log("Original Marks:", marks);
    console.log("New Marks:", newMarks);
}

function myFilter(){
    console.log("-------Filter--------");
    let numbers = [5, 3, 8, 130, 44];
    let newnumbers = numbers.filter(function(n){
        return n >= 10;
    });
    console.log("Original Numbers:", numbers);
    console.log("New Numbers:", newnumbers);
}
function myReduce(){
    console.log("-------Reduce--------");
let num1 = [1, 2, 3, 4, 4, 10, 11, 12];
let num2 = [10, 20, 30, 40, 50];

let total = num1
  .concat(num2)
  .reduce((sum, num) => sum + num, 0);

console.log("The sum of All numbers is:", + total);

}
myMap();
myFilter();
myReduce();