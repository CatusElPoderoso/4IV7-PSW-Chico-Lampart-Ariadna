
// Problema 9
/*
    Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras 
    trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se 
    consideran horas extras, y que estas se pagan al doble de una hora normal cuando no exeden de 8;
    si las horas exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales, y 
    el resto al triple.
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
    
        if(segundo > 40){
            extra = segundo - 40;
            total = (extra * (primero * 2)) + (segundo - extra) * primero;

            if(extra > 8){
                extra1 = segundo - 48;

                normal = (segundo - extra) * primero;
                extraD = 8 * (primero * 2);
                extraT = extra1 * (primero * 3);

                total = extraD + extraT + normal;

            }
        }else{
            total = primero * segundo;
        }

    console.log(total);
    document.formulario.resultado.value=total;
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.resultado.value="";
}