var fecha= new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth()+1;
var anio = fecha.getFullYear();
document.getElementById("fechaActual").innerHTML = `${dia}/${mes}/${anio}`