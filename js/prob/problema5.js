
// Problema 5
/*
    Un maestro desea saber qué porcentaje de hombres y qué porcentaje
    de mujeres hay en un grupo de estudiantes:
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

        cien = primero + segundo;
        mujeres = (primero/cien)*100;
        hombres = (segundo/cien)*100;

        total = mujeres+'%';
        total2 = hombres+'%';

    console.log(total);
    document.formulario.resultado.value = total;
    document.formulario.resultado2.value = total2;
}

function borrar(){
    document.formulario.numero1.value = "";
    document.formulario.numero2.value = "";
    document.formulario.resultado.value = "";
    document.formulario.resultado2.value = "";
}