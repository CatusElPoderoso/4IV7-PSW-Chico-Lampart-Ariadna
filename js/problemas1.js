
// Problema 1
/*
    Leer dos números; si son iguales que los multiplique, si el primero es mayor
    que el segundo, que los reste y si no que los sume.
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function operacion(){

    var valor1 = document.formulario.numero1.value;
    var valor2 = document.formulario.numero2.value;

    var numero1 = parseFloat(valor1);
    var numero2 = parseFloat(valor2);
    var total = 0;

        if(numero1=numero2){
            total = numero1 * numero2;
            document.formulario.resultado.value=total;
        }
        if(numero1>numero2){
            total = numero1 - numero2;
            document.formulario.resultado.value=total;
        }
        if(numero1<numero2){
            total = numero1 + numero2;
            document.formulario.resultado.value=total;
        }
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.resultado.value="";
}