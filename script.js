const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const vocalesEncriptadas = {
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
}

// detectar el evento click del boton
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

// detectar el evento click del boton
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = ""
}

// detectar el evento click del boton
function btncopiar() {
    mensaje.select();
    document.execCommand("copy");
}

/*
    encriptar texto con las vocales encriptadas
    recorer el texto
    asignar a una variable el texto encriptado
    asignar una variable el texto recoorido
    si la letra es una vocal
    asignar a la variable el valor de la vocal encriptada
    si no
    asignar a la variable el valor de la letra
    retornar la variable
 */
function encriptar(texto) {
    let textoEncriptado = ""
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (vocalesEncriptadas[letra]) {
            textoEncriptado += vocalesEncriptadas[letra]
        } else {
            textoEncriptado += letra
        }
    }
    return textoEncriptado
}

/*
    desencriptar texto con las vocales encriptadas
    recorer el texto
    asignar a una variable el texto desencriptado
    asignar una variable el texto recoorido
    si la letra es una vocal encriptada
    asignar a la variable el valor de la vocal encriptada
    si no
    asignar a la variable el valor de la letra
    retornar la variable
*/
function desencriptar(texto) {
    let textoDesencriptado = ""
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (letra == "a" && texto[i + 1] == "i") {
            textoDesencriptado += "a"
            i++
        } else if (letra == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
            textoDesencriptado += "e"
            i += 4
        } else if (letra == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
            textoDesencriptado += "i"
            i += 3
        } else if (letra == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
            textoDesencriptado += "o"
            i += 3
        } else if (letra == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
            textoDesencriptado += "u"
            i += 3
        } else {
            textoDesencriptado += letra
        }
    }
    return textoDesencriptado
}