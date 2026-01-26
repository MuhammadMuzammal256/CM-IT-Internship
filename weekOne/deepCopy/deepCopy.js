let obj = {
  ht: 12,
  age: 12,
  name: "muzammal",

  address: {
    city: "Lahore",
    country: "Pakistan",
    pinCode: 54000
  },

  education: {
    school: {
      name: "High School",
      year: 2018
    },
    college: {
      name: "City College",
      year: 2022
    }
  },

 
};


let mytask = obj;
mytask.education.school.name = "Hight";
mytask.education.college.year =100 ;
mytask.address.city = "toba";
mytask.ht = 123457;


console.log(obj);
console.log(mytask);


