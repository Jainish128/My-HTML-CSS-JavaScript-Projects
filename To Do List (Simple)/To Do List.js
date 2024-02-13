
var form = document.querySelector(".form");
var input = document.querySelector(".input");
var ul = document.querySelector(".list");

var list = JSON.parse(localStorage.getItem("list"));
if (list) 
{
    list.forEach((task) => {
        toDoList(task);
    })    
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})

function toDoList(task) 
{
    var newTask = input.value;
    if (task) 
    {
        newTask = task.name;    
    }    

    var li = document.createElement("li");
    if (task && task.checked) 
    {
        li.classList.add("checked");    
    }
    li.innerText = newTask;
    ul.appendChild(li);
    input.value = "";

    var checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<input type="checkbox" class="checkbox">`;

    li.appendChild(checkBtn);
    var trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    li.appendChild(trashBtn);

    checkBtn.addEventListener("click", () => {
        li.classList.toggle("checked");
        updateLocalStorage();
    })

    trashBtn.addEventListener("click", () => {
        li.remove();
        updateLocalStorage();
    })

    updateLocalStorage();

}

function updateLocalStorage()
{
    var li_s = document.querySelectorAll("li");
    list = [];
    li_s.forEach((li) => {
        list.push({
            name : li.innerText,
            checked : li.classList.contains("checked"),
        });
    });
    localStorage.setItem("list", JSON.stringify(list));

}