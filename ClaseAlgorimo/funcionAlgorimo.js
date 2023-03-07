function calcularPromedioAlgorimo(){

var primeraNota = parseFloat(document.getElementById("primeraNota").value);
var notaDos = parseFloat(document.getElementById("notaDos").value); 
var notaTres = parseFloat(document.getElementById("notaTres").value);

var promedio = (primeraNota *55 + notaDos *30 + notaTres *15) / 100;   


document.getElementById("resultado").value = promedio.toFixed(2);
}