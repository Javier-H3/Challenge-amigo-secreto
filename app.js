// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
lista.innerHTML = "";

let amigos = [];
const numeros = "1234567890";

function agregarAmigo() {
  let amigo = input.value;
  let bandera = true;

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
      if (!bandera) {
        alert("No se permiten numeros en los nombres.");
        break;
      }
    }
  }
  if (bandera) {
    ///Si el nombre es solo texto ingresa el nombre a la ultima posicion de la list.
    amigos.push(document.getElementById("amigo").value);
    mostrarAmigos(input.value, lista);
  }
  ///console.log(amigos);
  input.value = "";
}

function mostrarAmigos(texto, Idlista) {
  let li = document.createElement("li");
  li.textContent = texto;
  Idlista.appendChild(li);
}

function sortearAmigo() {
  if (amigos.length > 1) {
    ///Valida si la lista tiene mas de dos amigos para realizar el sorteo.
    let indice = Math.floor(Math.random() * amigos.length); ///Creacion del numero random
    console.log(indice);
    mostrarAmigos(
      `El amigo del sorteo es: ${amigos[indice]}, felicidades.`,
      resultado
    );
  } else {
    alert(
      "No puedes generar el sorteo si no tienes mas de dos amigos en la lista."
    );
  }
}
