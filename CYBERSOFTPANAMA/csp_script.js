window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})  

var elementos = document.querySelectorAll(".animated");

// Crear una función que se ejecute al hacer scroll
window.onscroll = function() {
  // Recorrer cada elemento
  for (var i = 0; i < elementos.length; i++) {
    // Obtener la posición del elemento respecto al viewport
    var rect = elementos[i].getBoundingClientRect();
    // Comprobar si el elemento está dentro del viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Añadir la clase animation-in al elemento
      elementos[i].classList.add("animation-in");
    } else {
      // Quitar la clase animation-in al elemento
      elementos[i].classList.remove("animation-in");
    }
  }
};