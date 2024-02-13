
var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (position) {
    crsr.style.left = position.x + "px";
    crsr.style.top = position.y + "px";
})