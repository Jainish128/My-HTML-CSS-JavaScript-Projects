
const textarea = document.getElementById("textarea");
const total_Counter = document.getElementById("total-counter");
const remaining_Counter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter();

function updateCounter() 
{
    total_Counter.innerText = textarea.value.length;
    remaining_Counter.innerText = textarea.getAttribute("maxlength") - textarea.value.length;    
}