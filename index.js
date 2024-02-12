function calcular(){
    const parcialUno = parseInt(document.getElementById("notaParcial1").value)
    const parcialDos = parseInt(document.getElementById("notaParcial2").value)
    const parcialTres = parseInt(document.getElementById("notaParcial3").value)

    if(isNaN(parcialUno) || isNaN(parcialDos) || isNaN(parcialTres)){
        alert("Por favor ingresa todos los campos")
    }else{

        const notaFinal = (parcialUno*0.3) +(parcialDos*0.3) +(parcialTres*0.4);

        if(notaFinal <60){
            alert("Reprobado")
        }else if(notaFinal <80){
            alert("Bueno")
        }else if(notaFinal <90){
            alert("Muy bueno")
        }else{
            alert("Sobresaliente")
        }

        document.getElementById("resultado").value = notaFinal;
    }
}