var month = document.getElementById("month");
var day = document.getElementById("day");
var date = document.getElementById("date");
var year = document.getElementById("year");

var full_date = new Date();
var month_name = full_date.getMonth();
month.innerText = full_date.toLocaleString("en", {
    month : "long",
});

day.innerText = full_date.toLocaleString("en", {
    weekday : "long",
});

date.innerText = full_date.getDate();
year.innerText = full_date.getFullYear();