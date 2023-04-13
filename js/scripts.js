/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Establecer la fecha límite (la fecha final de la cuenta regresiva)
var deadline = new Date("Apr 20, 2023 12:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
var x = setInterval(function () {
  var fechaActual = new Date()
  var year = fechaActual.getFullYear();

  // Obtener la fecha actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha límite y la fecha actual
  var distance = deadline - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar la cuenta regresiva en el elemento HTML
  document.getElementById("fecha_lanzamiento").innerHTML = days + " d -" + hours + " h -"
    + minutes + " m -" + seconds + " s ";

  document.getElementById("fecha_footer").innerHTML = year

  // Si la cuenta regresiva termina, mostrar un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("fecha_lanzamiento").innerHTML = "¡La cuenta regresiva ha terminado! y ya Esta publicado la canción";
  }
}, 1000);
