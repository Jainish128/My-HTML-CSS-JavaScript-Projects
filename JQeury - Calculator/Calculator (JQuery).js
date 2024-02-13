

function Solve(val) {
    var v = document.getElementById('calculate');
    v.value += val;
}

// function Result() {
//     var num1 = document.getElementById('calculate').value;
//     var num2 = eval(num1);
//     document.getElementById('calculate').value = num2;
// }

function Result() {
    var num1 = document.getElementById('calculate').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
}

function Clear() {
    var inp = document.getElementById('calculate');
    inp.value = ' ';
    var inp = document.getElementById('result');
    inp.value = ' ';
}

// function Back() {
//     var ev = document.getElementById('calculate');
//     ev.value = ev.value.slice(0, -1);
// }
