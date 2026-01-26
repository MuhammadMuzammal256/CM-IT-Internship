// function Car(name, color) {
//   this.name = name;
//   this.color = color ;
// }


// let myCar = new Car("Honda", "Red");
// console.log(myCar.name);  // Honda
// console.log(myCar.color);


// let mydate =  new Date();
// console.log(mydate.getSeconds());


//This Keyword
// function mame(name , age ){
//     this.name = name;
//     this.age = age;

// }

// let myname = new mame("helloo",24);
// console.log(myname);
// console.log(myname.age);
// console.log(myname.name);


// //-------dynamic funcation-----------
// function peoples(name = "Faiz" , age = 12){
//     console.log(name , age)
// }
// peoples();
// peoples("muz" , 102)
// //-----------------------------------------



// let obj = {
//   ht: 12,
//   age: 12,
//   name: "muzammal",

// };

// console.log(obj);
// obj.color = "white"
// console.log(obj);







// // //-------deep copy-----------

// let obj = {
//   ht: 12,
//   age: 12,
//   name: "muzammal",

//   address: {
//     city: "Lahore",
//     country: "Pakistan",
//     pinCode: 54000
//   },

//   education: {
//     school: {
//       name: "High School",
//       year: 2018
//     },
//     college: {
//       name: "City College",
//       year: 2022
//     }
//   },

 
// };



//     let myObj = JSON.parse(JSON.stringify(obj));
// myObj.education.school.name = "Hight";
// myObj.education.college.year =100 ;
// myObj.address.city = "toba";
// myObj.ht = 123457;
// console.log(obj);
// console.log(myObj);
// // //-------deep copy-----------

// let myObj = new Person(obj);
// myObj.education.school.name = "Changed";
// console.log(myObj);

