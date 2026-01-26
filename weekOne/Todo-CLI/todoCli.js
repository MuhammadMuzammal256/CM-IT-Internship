const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function showMenu() {
    console.log("\n--- To-Do List ---");
    console.log("1. Add Task");
    console.log("2. Show Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit");

    rl.question("Choose an option (1-4): ", function(num) {
        if (num === "1") {
            rl.question("Enter Task name: ", function(taskName) {
                tasks.push({ name: taskName });
                console.log(`Task "${taskName}" added!`);
                showMenu();
            });
        } else if (num === "2") {
            console.log("\nYour Tasks:");
            if (tasks.length === 0) {
                console.log("No tasks yet!");
            } 
            showMenu();
        } else if (num === "3") {
            console.log("Delete functionality not implemented yet.");
            showMenu();
        } else if (num === "4") {
            console.log("Goodbye!");
            rl.close();
        } else {
            console.log("Invalid option!");
            showMenu();
        }
    });
}

showMenu();
