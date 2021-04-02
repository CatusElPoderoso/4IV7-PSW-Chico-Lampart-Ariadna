
// Problema 2
/*
    Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, el vendedor desea 
    saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes y
    el total que recibirá en el mes, tomando en cuenta su sueldo base y comisiones.
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
    var primero = parseFloat(valor1);

    var comision = primero * 0.10;

    var total = primero + comision;

    document.formulario.resultado.value = total;
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.resultado.value="";
}