
function plus(color) 
{
    var value = document.getElementById("value").innerHTML;
    value++;
    document.getElementById("value").innerHTML = value;
}

function minus() 
{
    var value = document.getElementById("value").innerHTML;
    value--;
    document.getElementById("value").innerHTML = value;
}

function reset() 
{
    var value = document.getElementById("value").innerHTML;
    value = 0;
    document.getElementById("value").innerHTML = value;
}
