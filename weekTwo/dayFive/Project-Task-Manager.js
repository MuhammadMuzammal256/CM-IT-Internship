const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];


function TaskManager() {
    console.log("\n--- Welcome To Task Manager ---\n");
    showMenu();
}
function showMenu(){
    console.log("\n")
    console.log("1: Add Task");
    console.log("2: View All Tasks");
    console.log("3: Delete Task");
    console.log("4: Mark Task completed");
    console.log("5: ViewCompleted")
    console.log("6: ViewPending");



rl.question("----Select Menu (1-6)----: ",function(op){
      let opation = parseInt(op)

   if (opation === 1) {
    add();
} else if (opation === 2) {
    viewTask();
} else if (opation === 3) {
    deleteTask();
} else if (opation === 4) {
    completeTask();
} else if (opation === 5) {
    ViewCompleted();
} else if (opation === 6) {
    ViewPending();
} else {
    console.log("Invalid option, try again!");
    showMenu();
}



});


}

function add(){
rl.question("\nEnter task which you want to add :", function (taskName) {
    let obj = {
           id: Date.now(),
                name: taskName,
                completed: false
    }
    tasks.push(obj)
    showMenu();
});


}
function viewTask(){
    if(tasks.length == 0 ){
                  console.log("no task yet")
    }
    else{
            console.log("\n")
        console.log(" -- Added Tasks --");
        for(let i = 0 ; i< tasks.length ; i++){
            console.log(`Task ID "${tasks[i].id}" Task Name is "${tasks[i].name}" ` );
        }
        showMenu();
    }
}

function deleteTask(){
    if (tasks.length == 0) {
        console.log("no task is deleted");
        showMenu();
    } else {
        for (let i = 0; i < tasks.length; i++) {
            console.log(
                `Task Index ${i + 1} | Task ID "${tasks[i].id}" | Task Name "${tasks[i].name}"`
            );
        }

        rl.question("Enter Task number that be deleted : ", function (ind) {
            let delIndex = parseInt(ind) - 1;
            tasks.splice(delIndex, 1);
            showMenu();
        });
    }
}


function completeTask() {
    if (tasks.length == 0) {
        console.log("No task is to be completed");
        showMenu();
    } else {
        console.log("\n--- Tasks ---\n");

        for (let i = 0; i < tasks.length; i++) {
            let status;
            if (tasks[i].completed == true) {
                status = "[completed]";
            } else {
                status = "[pending]";
            }
            console.log(`${i + 1}. ${tasks[i].name} ${status}`);
        }

        rl.question("Enter number of task to mark as completed: ", function (input) {
            let markComplete = parseInt(input) - 1;

            if (tasks[markComplete] && !tasks[markComplete].completed) {
                tasks[markComplete].completed = true;
                console.log("\nCompleted: " + tasks[markComplete].name);
            } else {
                console.log("Invalid task number or already completed!");
            }

            showMenu();
        });
    }
}



function completeTask() {
    if (tasks.length == 0) {
        console.log("No task is to be completed");
        showMenu();
    } else {
        console.log("\n--- Tasks ---\n");

        for (let i = 0; i < tasks.length; i++) {
            let status;
            if (tasks[i].completed == true) {
                status = "[completed]";
            } else {
                status = "[pending]";
            }
            console.log(`${i + 1}. ${tasks[i].name} ${status}`);
        }

        rl.question("Enter number of task to mark as completed: ", function (input) {
            let markComplete = parseInt(input) - 1;

            if (tasks[markComplete] && !tasks[markComplete].completed) {
                tasks[markComplete].completed = true;
                console.log("\nCompleted: " + tasks[markComplete].name);
            } else {
                console.log("Invalid task number or already completed!");
            }

            showMenu();
        });
    }
}





function ViewCompleted(){
    if(tasks.length == 0){
        console.log('There is No Task Completed');
        showMenu();
    } else {
        let completedTasks = tasks.filter(function(task){
            return task.completed == true;
        });

        if (completedTasks.length == 0) {
            console.log('There is No Task Completed');
        } else  {
            console.log("\n--- Completed Tasks ---");
            for (let i = 0; i < completedTasks.length; i++) {
                console.log(`${i + 1}. ${completedTasks[i].name}`);
            }
        }
        showMenu();
    }
}


function ViewPending() {
    if (tasks.length == 0) {
        console.log("no pending task");
        showMenu();
    } else {
        let pending = tasks.filter(function (task) {
            return task.completed == false;
        });

        if (pending.length == 0) {
            console.log("no pending task");
            showMenu();
        } else {
            console.log("\n--- pending tasks ---");

            for (let j = 0; j < pending.length; j++) {
                console.log(`${j + 1}. ${pending[j].name}`);
            }

            showMenu();
        }  }
}


TaskManager();