
// Problema 6
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

    var primero = parseFloat(valor1);
    var segundo = parseFloat(valor2);
    var total = 0;
    var utilidad = 0;

        if(segundo < 1){
            utilidad = primero * 0.05;
            total = primero + utilidad;
        }
        if(segundo >= 1 && segundo < 2){
            utilidad = primero * 0.07;
            total = primero + utilidad;
        }
        if(segundo >= 2 && segundo < 5){
            utilidad = primero * 0.1;
            total = primero + utilidad;
        }
        if(segundo >= 5 && segundo < 10){
            utilidad = primero * 0.15;
            total = primero + utilidad;
        }
        if(segundo >= 10){
            utilidad = primero * 0.2;
            total = primero + utilidad;
        }

    console.log(total);
    document.formulario.resultado.value=total;
    document.formulario.resultado2.value=utilidad;
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.resultado.value="";
    document.formulario.resultado2.value="";
}