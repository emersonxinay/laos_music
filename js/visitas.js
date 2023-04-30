var visitas = localStorage.getItem("visitas");
if (visitas === null) {
  visitas = 0;
}
document.getElementById("visitas").innerHTML = visitas;
window.onload = function () {
  visitas++;
  localStorage.setItem("visitas", visitas);
  document.getElementById("visitas").innerHTML = visitas;
};