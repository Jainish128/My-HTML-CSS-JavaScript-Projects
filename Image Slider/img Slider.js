
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var img = document.querySelectorAll(".slide");
var image_Container = document.querySelector(".slides_container");
var current_Img = 1;
var timeout;

next.addEventListener("click", () => {
    current_Img++;
    clearTimeout(timeout);
    updateImg();
})

prev.addEventListener("click", () => {
    current_Img--;
    clearTimeout(timeout);
    updateImg();
})


function updateImg() 
{
    if (current_Img > img.length) 
    {
        current_Img = 1;    
    }    
    else if (current_Img < 1) 
    {
        current_Img = img.length;    
    }
    image_Container.style.transform = `translateX(-${(current_Img - 1) * 800}px)`;
    timeout = setTimeout(() => {
        current_Img++;
        updateImg();        
    }, 3000);
}