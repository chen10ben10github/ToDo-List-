document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create complete button with checkmark icon
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.onclick = () => {
            taskItem.classList.toggle("complete");
            saveTasks();
        };

        // Create edit button with pencil icon
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = () => {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskItem.firstChild.textContent = newTaskText.trim();
                saveTasks();
            }
        };

        // Create delete button with trash icon
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = () => {
            taskItem.remove();
            saveTasks();
        };

        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = "";
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = [];
    const taskItems = taskList.querySelectorAll("li");

    taskItems.forEach(item => {
        tasks.push({
            text: item.firstChild.textContent,
            isComplete: item.classList.contains("complete")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    savedTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.text;
        if (task.isComplete) {
            taskItem.classList.add("complete");
        }

        // Create complete button with checkmark icon
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.onclick = () => {
            taskItem.classList.toggle("complete");
            saveTasks();
        };

        // Create edit button with pencil icon
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = () => {
            const newTaskText = prompt("Edit your task:", task.text);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskItem.firstChild.textContent = newTaskText.trim();
                saveTasks();
            }
        };

        // Create delete button with trash icon
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = () => {
            taskItem.remove();
            saveTasks();
        };

        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

function clearAllTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    saveTasks();
}
