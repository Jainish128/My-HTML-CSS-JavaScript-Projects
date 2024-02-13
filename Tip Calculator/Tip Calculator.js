
function GetResult() 
{
    var bill_amt = document.getElementById("bill_amount").value;
    var tip_per = document.getElementById("tip_per").value;

    var tip_amt = bill_amt * tip_per / 100;
    var result = parseInt(tip_amt) + parseInt(bill_amt);

    document.getElementById("result").innerHTML = result;
}


