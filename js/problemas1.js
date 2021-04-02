
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

        if(primero == segundo){
            console.log('es igual, se multiplican');
            total = primero * segundo;
        }
        if(primero > segundo){
            console.log('el primer numero es mayor, se restan');
            total = primero - segundo;
        }
        if(primero < segundo){
            console.log('el segundo numero es mayor, se suman');
            total = primero + segundo;
        }
    console.log(total);
    document.formulario.resultado.value=total;
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.resultado.value="";
}