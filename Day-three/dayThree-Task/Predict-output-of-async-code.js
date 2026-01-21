// console.log("Start");



// setTimeout(function () {
//   console.log("Timeout 1");
// }, 0);

// async function asyncFun() {
//   try {
//     console.log("Inside Async");
 
//     await Promise.resolve(sdfsdffsdfdfsd);  
//     console.log("After await");
//   } catch (err) {
 
//     console.log("Caught Error:", err.message);
//   }
// }


// asyncFun();

// console.log("End of script");


console.log('start the code');
setTimeout(function(){
   console.log('start the code in time out'); 
},0);

async function print() {
    try{
        console.log('start the code in async Mood'); 
        await Promise.resolve(asdfasdfsadfs);
        console.log("after await")


    }catch(we){
        console.log("Error pkar lia hai" , we.massage
        )
    }
    
}

print();
 console.log("end the code");