


function dataLoad (callback){

setTimeout(function(){
  console.log(`My Name is Muzammal`);
    callback("im simple call back");
},2000);


}

function onComplete(message) {
  console.log("I'm done\n", message);
}

dataLoad(onComplete);