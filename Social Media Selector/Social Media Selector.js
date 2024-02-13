
const menu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const social_list = document.querySelector(".social-lists");
const li = document.querySelectorAll(".social-lists li");


menu.addEventListener("click", () => {
    social_list.classList.toggle("hide");
    menu.classList.toggle("rotate");
});


li.forEach((li) => {
    li.addEventListener("click", () => {
        menu.innerHTML = li.innerHTML;
        social_list.classList.add("hide");
        menu.classList.toggle("rotate");
    });
});