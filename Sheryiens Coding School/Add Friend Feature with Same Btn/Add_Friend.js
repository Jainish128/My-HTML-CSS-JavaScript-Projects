
var istatus = document.querySelector(".status");
var addRemoveFrnd = document.querySelector(".add-friend");
// var remove = document.querySelector(".remove");
var icheck = 0;


addRemoveFrnd.addEventListener("click", function () {

    if (icheck == 0) 
    {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addRemoveFrnd.innerHTML = "Remove Friend";
        icheck = 1;
    }
    else
    {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addRemoveFrnd.innerHTML = "Add Friend";
        icheck = 0;
    }

})






