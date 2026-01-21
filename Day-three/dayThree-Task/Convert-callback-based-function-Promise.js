function dataLoad (callback){

setTimeout(function(){
console.log("Data loaded");
callback("my nname is call back");
},5000)}

function abc (mm){
      console.log("updates",mm);
}
dataLoad(abc);

// function loadData(callback) {
//   setTimeout(function() {
//     console.log("Data loaded");
//     callback("Yeh data hai");
//   }, 1000);
// }

// // Call
// loadData(function() {
//   console.log("Callback received:",);
// });

