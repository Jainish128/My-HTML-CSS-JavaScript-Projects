
(function () {
    var result = document.querySelector('#calculate');
    var clear = document.querySelector('#clear');
    var equals = document.querySelector('#equal');
    var buttons = document.querySelectorAll('.btn');

    for (var i = 0; i < buttons.length; i++) 
    {
        buttons[i].addEventListener("click", buttonClicked);
    }

    function buttonClicked() {
        var value = this.textContent;

        if (value === "c") {
            result.textContent = "0";
        }
        else if (valur === "=") {
            var expression = result.textContent;
            var answer = eval(expression);
            result.textContent = answer;
        }
        else {
            if (result.textContent === "0") 
            {
                result.textContent = value;    
            } 
            else 
            {
                result.textContent += value;    
            }
        }
    }

})