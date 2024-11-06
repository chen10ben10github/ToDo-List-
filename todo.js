// we make  this app interactive. create function for adding tasks, removing , and clearing the entire list. we can use the document objective model(DOM) to manipulate in your HTML. 
const todoValue = document.getElementById("todoText"); 
const todoAlter = document.getElementById("Alter"); 
const listItems = document.getElementById("list-items"); 
const addUpdate = document.getElementById("AddUpdateClick");

let todo = JSON.parse(localStorage.getItem(todo-list)); 

if (!todo) {
    todo = []; 
}

//This below function will help to CREATE new tasks into the list and some additional features:

function CreateToDoItems() {
    if (todoValue.value === "") {
        todoAlter.innerText = "Please enter your todo text!!"; 
        todoValue.focus(); 
    }else{
        let IsPresent = false; 
        todo.forEach((element) => {
            if (element.item == todoValue.value) {
                IsPresent = true; 
            }
        }); 

        if (IsPresent) {
            setAlterMessage("This item already present in the list!!"); 
            return; 
        }
        let li = document.createElement("li"); 
        const todoItems = `<div title="Hit Double Click and Complete" 
        ondblclick = "CompleteTodoItems(this)" > ${todoValue.value}</div> <div> 
        <img class = "edit todo-controls" onclick = "UpdateToDoItems(this)" 
        <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>
        `;
        li.innerHTML = todoItems; 
        listItems.appendChild(li);

        if (!todo) {
            todo = []; 
        }
        let itemList = {item: todoValue.value, status: false};  
        todo.push(itemList); 
        setLocalStorage(); 
    }
    todoValue.value = ""; 
    setAlterMessage("Todo item Created Successfully!!"); 
}

// This below function helps us to READ data from  and display in the todo list some additional features:

function  ReadToDoItems() {
    todo.forEach((element) => {
        let li = document.createElement("li"); 
        let style = ""; 
        if (element.status){
            style = "Style='text-decoration: line-through'"; 
        }
        const todoItems = 
        `<div $style} title="Hit Double Click and Complete" ondbclick="CompletedToDoItems(this)">
        ${element.item

        }

        ${
            style === ""
              ? ""
              : '<img class="todo-controls" src="/images/check-mark.png" />'
          }</div><div>

        ${
        style === ""
        ? '<img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />'
        : ""
        }
        <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>`;
         li.innerHTML = todoItems;
         listItems.appendChild(li);
    });
}
    ReadToDoItems();

//This below function will help to UPDATE the task added by the user into the same list with some additional features:
// https://medium.com/@sharathchandark/how-to-build-a-todo-list-app-using-html-css-and-javascript-340cda6e3f9f


































