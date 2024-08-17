const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const copiar = document.querySelector(".copiar");
const p = document.querySelector(".p");
const span = document.querySelector(".span");


//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`



function btnEncriptar() {
    let validar = ValidarCaracteres();
    if (validar) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        copiar.classList.remove('ocultar');
        p.classList.add('ocultar');
        span.classList.add('ocultar');
    } else if(!validar) {
        textoNoValido();

        
    }if(validar){
        textoValido();
    }
}


function encriptar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    let validar = ValidarCaracteres();

    if (validar) {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    } else if (!validar) {
        textoNoValido();
    }if(validar){
        textoValido();
    }
}

function desencriptar(stringDesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringDesencriptada.includes(matrizcodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((err) => {
            console.error("Error al copiar el texto: ", err);
        });
}

function ValidarCaracteres() {
    let ValidarTexto = textArea.value;
    let CaracteresPermitidos = /^[a-zñ\s]+$/;
    
    return CaracteresPermitidos.test(ValidarTexto);
}

function textoNoValido(){
    document.getElementById("alerta_texto").innerText = "Caracteres no permitidos";
    document.getElementById("alerta_texto").style.color = "red";
}
function textoValido(){
    document.getElementById("alerta_texto").innerText = "Solo letras minúsculas sin acentos y sin caracteres especiales";
    document.getElementById("alerta_texto").style.color = "#495057";
}