// >>>>>Visitas solo para el mismo usuario
// var visitas = localStorage.getItem("visitas");
// if (visitas === null) {
//   visitas = 0;
// }
// document.getElementById("visitas").innerHTML = visitas;
// window.onload = function () {
//   visitas++;
//   localStorage.setItem("visitas", visitas);
//   document.getElementById("visitas").innerHTML = visitas;
// };
// <<< fin de visitas solo para el mismo usuario

// 2>>>>> Visita para sumar distintos usuarios
// Función para leer o crear una cookie
function getCookie(nombre) {
  var nombreEQ = nombre + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
  }
  var valor = 1; // Valor inicial aleatorio
  document.cookie = nombre + "=" + valor + "; path=/";
  return valor;
}

// Incrementar el contador de visitas
var contador = parseInt(getCookie("visitas"));
contador++;
document.cookie = "visitas=" + contador + "; path=/";

// Mostrar el contador de visitas
document.getElementById("contador-visitas").innerHTML = " " + contador + " ";


