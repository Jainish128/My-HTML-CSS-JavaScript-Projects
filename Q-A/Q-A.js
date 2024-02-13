
function quiz() 
{
    var quetion_number = document.getElementById("quetion-number");
    var quetion = document.getElementById("quetion");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var option_a = document.getElementById("option-a");
    var option_b = document.getElementById("option-b");
    var option_c = document.getElementById("option-c");
    var option_d = document.getElementById("option-d");
    var notice = document.getElementById("notice");
    var submit = document.getElementById("submit");

    if (d.checked) 
    {
        // notice.innerHTML = "Your Answer is Right.";
        // notice.style.color = "green";
        notice.innerHTML = "";
        
        quetion_number.innerHTML = "Quetion - 2";
        quetion.innerHTML = "Which of the following options is a JavaScript Framework ? ";
        option_a.innerHTML = "Bootstrap";
        option_b.innerHTML = "Laravel";
        option_c.innerHTML = "React JS";
        option_d.innerHTML = "DJango";

        if (c.checked) 
        {
            // notice.innerHTML = "Your Answer is Right.";
            // notice.style.color = "green";                
        } 
        else 
        {
            notice.innerHTML = "Your Answer is Wrong.";
            notice.style.color = "red";
        }
    }
    else
    {
        notice.innerHTML = "Your Answer is Wrong.";
        notice.style.color = "red";
    }
    
    



}