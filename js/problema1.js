
// Problema 1
/*
    Suponga que un individuo desea invertir su capital en un banco y desea saber 
    cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function operacion(){

    var valor = document.formulario.numero1.value;
    var resultado = parseFloat(valor);

    var interes = resultado * 0.02;

    var total = resultado + interes;

    document.formulario.resultado.value = '$ '+total;
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.resultado.value="";
}