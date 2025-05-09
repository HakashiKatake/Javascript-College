
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const todoItems = todoList.getElementsByTagName("li");
const body = document.querySelector("body");
const themeButton = document.getElementById("theme-button");


addButton.addEventListener("click", () => {
    const todoText = input.value.trim();
    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
            console.log("Todo item deleted!");
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        input.value = "";
        console.log("Todo item added!");
    }

});


themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("light")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
    console.log("Theme toggled!");
})










