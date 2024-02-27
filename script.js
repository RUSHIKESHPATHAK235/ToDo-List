const todoList = document.getElementById("myList")
const addToDoContainer = document.getElementById("main-container")
const todoInput = document.getElementById("container-input")
const todoButton = document.getElementById("container-btn")

todoButton.addEventListener('click', function(){
    const todoText = todoInput.value.trim();
    if(todoText){
        const todoItem = document.createElement("li");
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem)
        todoInput.value = "";

        todoItem.addEventListener('click',function(){
            todoList.removeChild(this);
        })
    }
})