let a = "Hi";
let b = "Bye";

console.log(a,b);
a = a+b;
console.log(a,b);
console.log(a.slice(0,2));
b = a.slice(0,a.length - b.length); //2 rah gay
console.log(" im b : "+b);
console.log("im a: "+a); 
a = a.slice(b.length); //slice a ka index mnay b ke value print krwa rhaa huio main q ka b = 2 ho gay tha or a abhi be 6 hai
console.log("im aa " + a);
console.log(a,b);