function firstName (name,callback){
    console.log(`My Name is ${name}`);
    callback(bigCity("TTS",abc));
}
function lastName(){
      console.log(`Muhammad Ashraf`);
}
function bigCity(cityName, callback2){
    console.log(`My city is ${cityName}`)
    
    callback2(`im call back 2 ${byeje("monday")}`)
}
function byeje(today,callback3){
    console.log(`${today}`);
    callback3("im call back 3");
}
function a(mm){
    console.log("CALL Back End",mm)
}
function abc(lastdate,callback4){

    console.log("last item")
}

firstName("Muzammal", lastName);