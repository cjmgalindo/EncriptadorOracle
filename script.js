const input = document.getElementById("mensaje")
const areaRespuesta = document.getElementById("area-Respuesta")
const btnEncriptador = document.getElementById("btn-encriptador")
const btnDesencriptador = document.getElementById("btn-desencriptador")
const btnCopiar = document.querySelector("#btn-copiar");

const mensajeNoEncontrado = document.querySelector(".mensajeNoEncontrado")

// funcion para copiar el texto al portapapeles
btnCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(areaRespuesta.textContent).then(() => {
    input.value = "";
    input.focus()
  }, () => {
    alert("Error al copiar el texto");
  });
});


// Encriptador

btnEncriptador.addEventListener("click", () => {
    let mensaje = input.value;
    let mensajeEncriptado = "";
    
    function Encriptador() {

        
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case "a":
                    mensajeEncriptado += "ai";
                    break;
                case "e":
                    mensajeEncriptado += "enter";
                    break;
                case "i":
                    mensajeEncriptado += "imes"
                    break;
                case "o":
                    mensajeEncriptado += "ober"
                    break;
                case "u":
                    mensajeEncriptado += "ufat"
                    break;
                default:
                    mensajeEncriptado += mensaje[i]
                    break;
            }
        }

        areaRespuesta.textContent = mensajeEncriptado;
        areaRespuesta.style.display = "block"
        btnCopiar.style.display = "block"
        mensajeNoEncontrado.style.display = "none";

    }
    
    mensaje !== "" ? Encriptador() : alert("introduce la palabra o frase que deseas encriptar")
    
    // por lo del hoisting la funcion deber ser iniciada y declarada, arriba desde de donde se llama.
    
})


// Desencriptador
btnDesencriptador.addEventListener("click" , () => {
    let mensaje = input.value;
    let mensajeDesencriptado = "";


    function Desencriptador() {
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case "a":
                    if(mensaje[i+1] == "i"){
                        mensajeDesencriptado += "a"
                        i++;
                    }
                    break;
                case "e":
                    if(mensaje[i+1] == "n"){
                        mensajeDesencriptado += "e"
                        
                        i = i+4;
                    }
                    break;
                case "i":
                    if(mensaje[i+1] == "m"){
                        mensajeDesencriptado += "i"
                
                        i = i+3;
                    }
                    break;
                case "o":
                    if(mensaje[i+1] == "b"){
                        mensajeDesencriptado += "o"
                        
                        i = i+3;
                    }
                    break;
                case "u":
                    if(mensaje[i+1] == "f"){
                        mensajeDesencriptado += "u"
                        
                        i = i+3;
                    }
                    break;
                default:
                    mensajeDesencriptado += mensaje[i]
                    break;
            }
        }
        areaRespuesta.textContent = mensajeDesencriptado;
    }
    areaRespuesta.textContent = mensajeDesencriptado;

    mensaje != "" ? Desencriptador() : alert("introduce la palabra o frase que deseas desencriptar")
})

