

function calcular(){
    const parcialUno = parseInt(document.getElementById("notaParcial1").value)
    const parcialDos = parseInt(document.getElementById("notaParcial2").value)
    const parcialTres = parseInt(document.getElementById("notaParcial3").value)

    if(isNaN(parcialUno) || isNaN(parcialDos) || isNaN(parcialTres)){
        alert("Por favor ingresa todos los campos")
    }else{

        const notaFinal = (parcialUno*0.3) +(parcialDos*0.3) +(parcialTres*0.4);
        let mensaje ="";
        if(notaFinal <60){
            mensaje = "Reprobado😧"
        }else if(notaFinal <80){
            mensaje = "Bueno🙂"
        }else if(notaFinal <90){
            mensaje = "Muy Bueno✨"
        }else{
            mensaje = "Sobresaliente🎉"
        }
        document.getElementById("msjReprobado").innerHTML = `<div class="alert alert-info" role="alert">${mensaje}</div>`
        document.getElementById("resultado").value = notaFinal;
    }
}

function limpiar(){
   document.getElementById("notaParcial1").value = 0;
   document.getElementById("notaParcial2").value = 0;
   document.getElementById("notaParcial3").value = 0;
   document.getElementById("resultado").value = 0;
   document.getElementById("msjReprobado").innerHTML = "";
}