const readline = require("readline");

console.log("\n To-Do List Application \n");
console.log("\n To-Do List Application \n");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todoTasks = [];

function showMenu() {
  console.log("\nTo-Do List Menu:");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Remove Task");
  console.log("4. Exit");
  rl.question("Choose an option (1-4): ", function (option) {
    let op = parseInt(option);
    if(op < 1 || op > 4 || isNaN(op)){
        console.log("\n");
        console.log("Invalid option. Please choose a number between 1 and 4.");
        showMenu();
        return;
    }else{

  if (op === 1) {
      {
        console.log("\n");
        rl.question("Enter Task Name: ", function (taskName) {
          todoTasks.push(taskName);

          console.log(`\nYour Task "${taskName}" has been added successfully.`);
          showMenu();
        });
      }
    }
    if (op === 2) {
      console.log("\n");
      if (todoTasks.length === 0) {
        console.log("\n");
        console.log("Sorry No tasks available.");
        showMenu();
      } else {
        todoTasks.forEach((element, index) => {
          console.log(`${index + 1}. ${element}`);
        
        });
        showMenu();
      }
    } //op 2
    if (op === 3) {
      if (todoTasks.length === 0) {
           console.log("\n");
        console.log("Sorry No tasks available to remove.");
           console.log("\n");
        showMenu();
        return;
      } else {
        todoTasks.forEach((list, index) => {
          console.log(`${index + 1}. ${list}`);});

          
            rl.question("Enter Task Number to Remove: ", function (taskNumber) {
                let taskIndex = parseInt(taskNumber) - 1;
                let removedTask = todoTasks.splice(taskIndex, 1);
                console.log(`\nYour Task ${removedTask} has been removed successfully.`);
                   console.log("\n");
              
  showMenu();
            });

      }
    } //op 3
    if (op === 4) {
        console.log("\n");
        console.log("Exiting To-Do List. Goodbye!");
                console.log("\n");
        rl.close();
    }
    
    }

  

  });
  
} //showMenu

showMenu();
