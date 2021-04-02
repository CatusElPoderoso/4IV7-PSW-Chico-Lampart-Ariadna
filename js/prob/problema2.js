
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

    var base = document.formulario.sueldo.value;
    var valor1 = document.formulario.numero1.value;
    var valor2 = document.formulario.numero2.value;
    var valor3 = document.formulario.numero3.value;

    var sueldo = parseFloat(base);
    var primero = parseFloat(valor1);
    var segundo = parseFloat(valor2);
    var tercero = parseFloat(valor3);

    var comision1 = primero * 0.10;
    var comision2 = segundo * 0.10;
    var comision3 = tercero * 0.10;

    var total = sueldo + comision1 + comision2 + comision3;

    document.formulario.resultado.value = total;
}

function borrar(){
    document.formulario.resultado.value="";
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.numero3.value="";
    document.formulario.sueldo.value="";
}