// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const numeros = "1234567890";

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  let bandera = true;
  let bandera2 = true;

  if (amigo === "") {
    ///Validad que el usuario no ingrese nada vacio
    alert("No se permiten espacios vacios.");
    bandera = false;
  } else {
    ///Validad que el usuario no ingrese numeros.
    for (const ch of amigo) {
      if (amigos.includes(amigo)) {
        ///Valido si el nombre ya esta dentro de la lista.
        alert("El nombre del amigo ya esta en la lista.");
        bandera = false;
        break;
      }
      for (const num of numeros) {
        if (ch == num) {
          bandera = false;
          bandera2 = false;
          break;
        }
      }
      if (!bandera2) {
        alert("No se permiten numeros en los nombres.");
        break;
      }
    }
  }
  if (bandera) {
    ///Si el nombre es solo texto ingresa el nombre a la ultima posicion de la list.
    amigos.push(document.getElementById("amigo").value);
  }
  ///console.log(amigos);
}
