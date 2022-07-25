// DECLARACION DE VARIABLES

const botonEncriptar = document.getElementById("btn-encrypt");
const botonDesencriptar = document.getElementById("btn-decrypt");
let asideImg = document.querySelector(".section-right__img");
let asideMensaje = document.querySelector(".section-right__msj");
let textoUsuario = document.querySelector(".section-left__textarea");
let mensajeEncriptado = document.querySelector(".section-right__textarea");
let botonCopiar = document.getElementById("btn-copy");

// FUNCIONES

function encriptar(textoInput) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoInput = textoInput.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoInput.includes(matrizCodigo[i][0])) {
      textoInput = textoInput.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return textoInput;
}

function desencriptar(textoInput) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoInput.includes(matrizCodigo[i][1])) {
      textoInput = textoInput.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return textoInput;
}

function copiar() {
  mensajeEncriptado.select();
  document.execCommand("copy");
  textoUsuario.value = mensajeEncriptado.value;
  alert("El mensaje fue copiado al portapapeles");
  textoUsuario.focus();
}

function btnEncriptar() {
  const textoEncriptado = encriptar(textoUsuario.value);
  mensajeEncriptado.value = textoEncriptado;
  textoUsuario.value = "";
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textoUsuario.value);
  mensajeEncriptado.value = textoDesencriptado;
  textoUsuario.value = "";
}

function ocultar() {
  asideImg.classList.add("hidden");
  asideMensaje.classList.add("hidden");
  mensajeEncriptado.classList.add("grow");
  botonCopiar.classList.remove("hidden");
}

// COMIENZO DEL PROGRAMA

botonEncriptar.addEventListener("click", ocultar);
botonEncriptar.addEventListener("click", btnEncriptar);
botonDesencriptar.addEventListener("click", ocultar);
botonDesencriptar.addEventListener("click", btnDesencriptar);
botonCopiar.addEventListener("click", copiar);
