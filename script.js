function mostrarCreditos() {
        alert("Ariel Cuñado Carpintero Nº4    2ºC");
      }

      function ocultarMostrar() {
        var section = document.querySelector(".bloque1");
        section.style.display = section.style.display === "none" ? "block" : "none";
      }

      function cambiarColor() {
        var section = document.querySelector(".bloque1");
        section.style.backgroundColor = section.style.backgroundColor === "blue" ? "goldenrod" : "blue";
      }

      function mostrarFecha() {
        alert("Fecha actual: " + new Date());
      }

      function cambiarColorFondo(activar) {
        var section = document.querySelector(".bloque2");
        if (activar) {
          section.style.backgroundColor = "lightgreen";
        } else {
          section.style.backgroundColor = "";
        }
      }
