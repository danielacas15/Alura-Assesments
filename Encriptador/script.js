
//e-  enter//
//o - ober//
// i - imes//
// a - aimes//
// u - ufat//

//funcion de la clase 
const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""

}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["o", "ober"],["i", "imes"], ["a", "ai"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0;  i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
            //la stringEncriptada es el mensaje que el usuario va a poner en donde pone ingrese mensaje aqui//
    }       //la matrizCodigo seria la palabra o palabras que se ponen
   return stringEncriptada;

}


//funcion desencriptar de la clase 

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["o", "ober"],["i", "imes"],["a", "ai"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0;  i < matrizCodigo.length; i++){
       if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
       }

    }

    return stringDesencriptada;

}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")

}

