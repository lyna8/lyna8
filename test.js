var data = new Date();
var day = data.getDate();
var month = data.getMonth()+1;
var year = data.getFullYear();

document.getElementById('day').innerHTML= "<h1>"+day+"<\h1>"
document.getElementById('month').innerHTML= "<h1>"+month+"<\h1>"
document.getElementById('year').innerHTML= "<h1>"+year+"<\h1>"