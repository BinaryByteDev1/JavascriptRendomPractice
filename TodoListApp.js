const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("add_button");
const todoList = document.getElementById("todoList");

let editTodo = null;
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Please Write Something....");
        return false;
    }

    if(addButton.value == "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addButton.value = "Add";
        inputBox.value = "";
    }

else{

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    todoList.appendChild(li);
    inputBox.value = "";

    //edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit_btn_js");
    li.appendChild(editBtn);

 
    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete_btn_js");
    li.appendChild(deleteBtn);

    saveTodos.appendChild(li);
    inputBox.value = "";
    saveTodos(inputText);

}
}

const updateTodo = (elm) =>{
    if(elm.target.innerHTML === "Delete"){
        todoList.removeChild(elm.target.parentElement);
    }
    else if(elm.target.innerHTML === "Edit"){
        inputBox.value = elm.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addButton.value = "Edit";
        editTodo = elm;
    }
}



// Local Storage in Javascript imp Store todoList
// Local Storage in Javascript imp Store todoList



const saveTodos = (todo) =>{
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.push(todo);
    localStorage.setItem("Todos" , JSON.stringify(todos));



}   
const getLocalTodos = () =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(Todoelm => {

            
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = Todoelm;
            li.appendChild(p);
        
            todoList.appendChild(li);
            inputBox.value = "";
        
            //edit button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("edit_btn_js");
            li.appendChild(editBtn);
        
         
            //delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("delete_btn_js");
            li.appendChild(deleteBtn);
            
            todoList.appendChild(li);
        
        });
    }



}
document.addEventListener("DOMContentLoaded" , getLocalTodos);
addButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , updateTodo);

