
console.log('\n-------------Reduce Funcation---------------\n');
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];


//Sum of all numbers in an array
// 1st is accoumalotor and 2nd is current value
function sumAllNumber(){

    let newArray1 = array1.reduce(function(a,b){
        return a+b;
    },0);
    console.log(newArray1 + "\n");
}



function counts(){
    let fruits = ['apple', 'banana', 'apple', 'mango', 'banana'];
    let count = fruits.reduce(function(acc, cur){
        if(acc[cur]){
            acc[cur] = acc[cur] + 1;  
        } else {
            acc[cur] =  1;
        }
        return acc;
    }, {}); 

    console.log(count); 




}

counts();






// sumAllNumber();