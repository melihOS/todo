const cardBody = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];
const formControl = document.querySelector("#todo");
const list = document.querySelector(".list-group");
const todoForm = document.querySelector("#todo-form");
const cardtittle = document.querySelector(".card-title");
const clear = document.querySelector("#clear-todos");
const buttons = document.querySelector("#buttons");

evenListener();

function evenListener(){
    todoForm.addEventListener("submit",addItem);
    document.addEventListener("DOMContentLoaded",domcontent);
    cardBody2.addEventListener("click",deleteTodo);
    clear.addEventListener("click",deleteall);
}

function deleteall(e){
    if(confirm("Hepsini silmek istediğinizden emin misiniz?")){

    while(list.firstElementChild =! null){
        list.removeChild(list.firstElementChild);
    }
    localStorage.removeItem("todos");
}
}

function domcontent(){
    let todos = storageTodo();

    todos.forEach(function(todo){

        addTodo(todo);

    }

    )   
}

function deleteTodo(e){

   if(e.target.className === "fa fa-remove")

   {
        e.target.parentElement.parentElement.remove();
        deleteStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Silme işlemi başarılı.");
   }


}

function deleteStorage(deletetodo){
    let todo = storageTodo();
    todo.forEach(function(todos,index){
        if(todos === deletetodo)
        {
            todo.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todo));

}

function addItem(e){
    const newForm = formControl.value.trim();
    if(formControl.value === ""){
        showAlert("danger","Lütfen bir todo giriniz.");       
    }

    else{
        addTodo(newForm);
        storage(newForm);
        showAlert("success","Başarılı giriş.");  
    }

    e.preventDefault();
}

function storageTodo(){
    let todos;

    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}
function storage(newForm)
{
    let todos = storageTodo();
	
    todos.push(newForm);
   
    localStorage.setItem("todos",JSON.stringify(todos));
}


function showAlert(type,message)
{
    const mesaj = document.createElement("div");
    mesaj.className = `alert alert-${type}`;
    mesaj.textContent = message;
    cardBody.appendChild(mesaj);
    setTimeout(function () {
        mesaj.remove();
    }, 2500);
}

function addTodo(newForm){
    const sutun = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#"
    a.className = "delete-item";
    a.innerHTML = "<i class = 'fa fa-remove'></i>";

    sutun.className= "list-group-item d-flex justify-content-between";

    sutun.appendChild(document.createTextNode(newForm));
    sutun.appendChild(a);
    list.appendChild(sutun);
    formControl.value = "";
  
}
