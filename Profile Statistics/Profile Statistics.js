
var counter = document.querySelectorAll(".counter");

counter.forEach((counter) => {
    counter.innerText = "0";
    incrementCounter();
    
    function incrementCounter() 
    {
        var currentNumber = +counter.innerText;
        var dataCeil = counter.getAttribute("data-ceil");
        var increment = dataCeil / 15;
        currentNumber = Math.ceil(currentNumber + increment);
        
        if (currentNumber < dataCeil) 
        {
            counter.innerText = currentNumber;
            setTimeout(incrementCounter, 50);    
        } 
        else 
        {
            counter.innerText = dataCeil;    
        }
    }
})