
var container_img = document.querySelector(".container img");
var center_heart = document.querySelector("#center_heart");
var like = document.querySelector("#like");
var unlike = 0;

container_img.addEventListener("dblclick", function () {
    center_heart.style.transform = "translate(-50%, -50%) scale(1)";
    
    setTimeout(function () {
        center_heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)
})

like.addEventListener("click", function () {

    if (unlike == 0) 
    {
        center_heart.style.transform = "translate(-50%, -50%) scale(1)";
        like.style.color = "red";
        like.style.fontWeight = "bold";
    
        setTimeout(function () {
            center_heart.style.transform = "translate(-50%, -50%) scale(0)";
        }, 2000)  
        unlike = 1;
    }
    else
    {
        center_heart.style.transform = "translate(-50%, -50%) scale(0)";
        like.style.color = "black";
        like.style.fontWeight = "lighter";
    
        setTimeout(function () {
            center_heart.style.transform = "translate(-50%, -50%) scale(0)";
        }, 100)
        unlike = 0;
    }

})

