const readline = require("readline");

// Create interface to read input from command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store tasks
let tasks = [];

function showMenu() {
    console.log("\n--- To-Do List ---");
    console.log("1. Add Task");
    console.log("2. Show Tasks");
    console.log("3. Mark Task as Done");
    console.log("4. Delete Task");
    console.log("5. Exit");

    rl.question("Choose an option (1-5): ", function(option) {
        if (option === "1") {
            rl.question("Enter task: ", function(task) {
                tasks.push({ name: task, done: false });
                console.log(`Task "${task}" added!`);
                showMenu();
            });
        } else if (option === "2") {
            console.log("\nYour Tasks:");
            if (tasks.length === 0) {
                console.log("No tasks yet!");
            } else {
                tasks.forEach((task, index) => {
                    let status = task.done ? "[Done]" : "[Not Done]";
                    console.log(`${index + 1}. ${task.name} ${status}`);
                });
            }
            showMenu();
        } else if (option === "3") {
            rl.question("Enter task number to mark as done: ", function(num) {
                let index = parseInt(num) - 1;
                if (tasks[index]) {
                    tasks[index].done = true;
                    console.log(`Task "${tasks[index].name}" marked as done!`);
                } else {
                    console.log("Invalid task number!");
                }
                showMenu();
            });
        } else if (option === "4") {
            rl.question("Enter task number to delete: ", function(num) {
                let index = parseInt(num) - 1;
                if (tasks[index]) {
                    console.log(`Task "${tasks[index].name}" deleted!`);
                    tasks.splice(index, 1);
                } else {
                    console.log("Invalid task number!");
                }
                showMenu();
            });
        } else if (option === "5") {
            console.log("Goodbye!");
            rl.close();
        } else {
            console.log("Invalid option, try again.");
            showMenu();
        }
    });
}

// Start the CLI app
showMenu();
