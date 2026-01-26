let obj = {
  ht: 12,
  age: 12,
  name: "muzammal",
};

console.log(obj);


let copyObj = { ...obj };

copyObj.color = "white";
copyObj.name = "None"

console.log(copyObj);
console.log(obj);
