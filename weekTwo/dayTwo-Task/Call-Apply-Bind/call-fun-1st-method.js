
//1st method Call Funcation



let user1 = {
    name : "Ali",
    lastName : "Ahmed",
 displayFullName : function(){
 console.log(`${this.name} and ${this.lastName}`)
 }
}
let user2 = {
    name : "faaaiz",
    lastName : "romi"
}
user1.displayFullName();
user1.displayFullName.call(user2);