
let elementos = document.getElementsByClassName("disaplayNone");
let llaveDeCirfrado = "1234567890123456";
let alerta="Ingrese un texto valido.";

function getText (id) {
    texto = String(document.getElementById(id).value) ;
    return texto.trim()
}
function encriptar () {
    texto_procesado = getText("texto-ingresado")
    
    if (texto_procesado !==""){
        texto_procesado = CryptoJS.AES.encrypt(texto,llaveDeCirfrado);
        alerta="Texto Encriptado:"
    }else{
        alerta="Ingrese un texto valido"
    }
    verifyText(texto_procesado,alerta);
}

function desencriptar () {
    texto_procesado=getText("texto-ingresado")
    alerta = "Ingrese un texto valido";
    try {
            bytes_decrypt = CryptoJS.AES.decrypt(texto_procesado,llaveDeCirfrado);
            texto_procesado = bytes_decrypt.toString(CryptoJS.enc.Utf8);
            if (texto_procesado !=="") {
                alerta = "Texto descifrado: " ; // Mensaje de alerta con el texto descifrado
            }
    } catch (error) {
            texto_procesado="";
        }  

    console.log(alerta)
    verifyText( texto_procesado,alerta);
}

function verifyText (texto,alerta){
    if (texto == ""){
        condicionesIniciales()
    }else{
        limpiarCaja ();
        asignarTextoId(texto,"textoEncriptado")
        document.getElementById("textoEncriptado").style.wordBreak="break-all";
        document.getElementById("textoEncriptado").style.overflow="auto" ;
        document.getElementById("copiar").style.visibility="visible" ;
        
        // // document.getElementsByClassName("ocultar")[0].style.display="flex";
        // document.getElementsByClassName("sidebar")[0].style.justifyItems="start";
        // document.getElementsByClassName("sidebar")[0].style.justifyContent="space-between";
        // document.getElementsByClassName("sidebar")[0].style.textAlign="center";
        // document.getElementsByClassName("sidebar")[0].style.alignItems="start";
        // document.getElementsByClassName("sidebar")[0].style.flexWrap="wrap";
        // document.getElementsByClassName("sidebar")[0].style.flexBasis="100%";

    }
    asignarTextoId(alerta,"alerta")
}

function condicionesIniciales(){
    let textoOriginal="Ingrese el texto que desea encriptar o desencriptar"
    display ("")
    asignarTextoId(textoOriginal,"textoEncriptado")
    document.getElementById("textoEncriptado").style.wordBreak=null;
    document.getElementById("textoEncriptado").style.overflow=null;
    document.getElementById("copiar").style.visibility="hidden" ;
}

function limpiarCaja (){
    display ("none")
}

function display (displayValue){
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = displayValue;
    }

}

function asignarTextoId(texto,id){
    let texto_encriptado_html = document.getElementById(id);
    texto_encriptado_html.textContent = texto ;
}

function copiarTexto() {
    var texto = document.getElementById("textoEncriptado").innerText;
    navigator.clipboard.writeText(texto)
      .then(() => console.log("Texto copiado al portapapeles"))
      .catch(err => console.error("Error al intentar copiar el texto:", err));
  }


condicionesIniciales();
