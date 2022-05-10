// DECLARACION DE VARIABLES

const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
let asideImg = document.querySelector(".aside-img");
let asideMensaje = document.querySelector(".aside-msj");
let textoUsuario = document.querySelector(".caja-txt_left");
let mensajeEncriptado = document.querySelector(".caja-txt_right");
let botonCopiar = document.querySelector(".btn-copiar");

// FUNCIONES

function encriptar(textoInput){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoInput = textoInput.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoInput.includes(matrizCodigo[i][0])){
            textoInput = textoInput.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1]);
        }
    }
    return textoInput;
}

function desencriptar(textoInput){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoInput.includes(matrizCodigo[i][1])){
            textoInput = textoInput.replaceAll(matrizCodigo[i][1],
            matrizCodigo[i][0]);
        }
    }
    return textoInput;
}

function copiar(){
    mensajeEncriptado.select();
    document.execCommand('copy');
    textoUsuario.value = mensajeEncriptado.value;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textoUsuario.value);
    mensajeEncriptado.value = textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textoUsuario.value);
    mensajeEncriptado.value = textoDesencriptado;
}

function ocultar(){
    asideImg.classList.add("oculto");
    asideMensaje.classList.add("oculto");
    mensajeEncriptado.classList.add("agrandar");
    botonCopiar.classList.remove("oculto");
}

// COMIENZO DEL PROGRAMA

botonEncriptar.addEventListener("click", ocultar);
botonEncriptar.addEventListener("click", btnEncriptar);
botonDesencriptar.addEventListener("click", ocultar);
botonDesencriptar.addEventListener("click", btnDesencriptar);
botonCopiar.addEventListener("click", copiar);
