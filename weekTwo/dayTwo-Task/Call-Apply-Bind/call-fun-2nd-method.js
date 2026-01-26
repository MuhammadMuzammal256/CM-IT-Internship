
//2nd method Call Funcation

let user1 = {
    name : "Ali",
    lastName : "Ahmed",

}
 let displayFullName = function(city){
 console.log(`${this.name} and ${this.lastName} and ${city}`)
 }
let user2 = {
    name : "faaaiz",
    lastName : "romi"
}


 

let result =   displayFullName.call(user1, "FSD");
console.log(result);





