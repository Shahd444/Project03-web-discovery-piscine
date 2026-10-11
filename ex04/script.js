let count = 0;

let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");


function addingTask() {
    // create list item take it's value and add it to the list and increment the count
    if (taskInput.value.trim() === "") {
        taskInput.value = "";
        return;
    }

    let task = document.createElement("li");
    task.textContent = taskInput.value;
    taskList.appendChild(task);
    count++;
    taskCount.textContent = count;
    taskInput.value = "";

    // toggle if it exists remove it if not add it
    let completeButton = document.createElement("button");
    completeButton.classList.add("button");
    completeButton.textContent = "Complete";
    task.appendChild(completeButton);

    completeButton.addEventListener("click", function() {
        task.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.textContent = "Delete";
    task.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        task.remove();
        count--;
        taskCount.textContent = count;
    });

}

addTaskButton.addEventListener("click", addingTask);

taskInput.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addingTask();
    }
});