let user1 = {
    name : "muzammal",
    lastName : "Ashraf"
}

let displayDetails = function (con, con1, con2) {
    console.log(`${this.name}, ${this.lastName}, ${con} ${con1}, ${con2}`);
};

let arr = ["mas","qwe","fdf"]
displayDetails.apply(user1,arr);