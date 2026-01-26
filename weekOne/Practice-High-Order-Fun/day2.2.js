function myMap(){
let arr = [1,3,5,7,9];
let arr1 = [2,4,6,8,10]
let newArr = arr.map(function(ar1 , ar2){
    return ar1 + arr1[ar2];
});
console.log("Array:", newArr);
}
myMap();

function myMa1(){
let arr23 = [1,3,5,7,9];
let newArr = arr23.map(function(ar1){
    return ar1 * 2;
});
console.log("Array:", newArr);
}
myMa1();



function myReduce(){
    console.log("-------Reduce--------");
let num1 = [1, 2, 3, 4, 4, 10, 11, 12];
let num2 = [10, 20, 30, 40, 50];

let total = num1.concat(num2).reduce((sum, num) => sum + num, 0);

console.log("The sum of All numbers is:", + total);

}
myReduce();




function myreduce2(){
    array = [1,2,3,4,5,6,7,8,9,10];
    let sum = array.reduce(function(one,two){
        return one + two;
    });
    console.log("Sum is:", sum);
}

myreduce2();

