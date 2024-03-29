
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

    var final = document.formulario.examen.value;
    var proyec = document.formulario.trabajo.value;
    var valor1 = document.formulario.numero1.value;
    var valor2 = document.formulario.numero2.value;
    var valor3 = document.formulario.numero3.value;

    var examen = parseFloat(final);
    var trabajo = parseFloat(proyec);
    var primero = parseFloat(valor1);
    var segundo = parseFloat(valor2);
    var tercero = parseFloat(valor3);

    if(final.length < 3 && proyec.length < 3 && valor1.length < 3 && valor2.length < 3 && valor3.length < 3){

    promedio1 = (primero + segundo + tercero)/3;
    promedio2 = (promedio1 * 0.55)/10;

    examen1 = (examen * 0.30)/10;
    trabajo1 = (trabajo * 0.30)/10;

    var total = (promedio2 + examen1 + trabajo1) * 10;

    document.formulario.resultado.value = total;
    }
    else{
        console.log("Error");
        alert("No puede poner más de cuatro dígitos en los cuadros");
        borrar();
    }
}

function borrar(){
    document.formulario.examen.value="";
    document.formulario.trabajo.value="";
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.numero3.value="";
    document.formulario.resultado.value="";
}