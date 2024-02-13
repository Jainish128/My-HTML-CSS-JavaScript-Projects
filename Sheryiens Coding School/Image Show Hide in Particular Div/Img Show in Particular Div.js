
var element = document.querySelectorAll(".element");

element.forEach(function (ele) {
    
    ele.addEventListener("mouseenter", function () {
        ele.childNodes[3].style.opacity = 1        
    });

    ele.addEventListener("mouseleave", function () {
        ele.childNodes[3].style.opacity = 0        
    });

    ele.addEventListener("mousemove", function (details) {
        ele.childNodes[3].style.left = details.x + "px";        
    });

})