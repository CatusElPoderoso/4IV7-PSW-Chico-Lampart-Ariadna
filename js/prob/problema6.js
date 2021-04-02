
// Problema 6
/*
    Realizar un algoritmo que calcule la edad de una persona:
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function operacion(){

        const fecha = new Date();
        var año1 = fecha.getFullYear();
        var mes1 = (fecha.getMonth()) + 1;
        var dia1 = fecha.getDate();

        console.log(fecha);
        console.log(año1,mes1,dia1);

        var valor1 = document.formulario.numero1.value;
        var valor2 = document.formulario.numero2.value;
        var valor3 = document.formulario.numero3.value;

        var primero = parseInt(valor1);
        var segundo = parseInt(valor2);
        var tercero = parseInt(valor3);

        if(primero < año1){
            if(segundo <= 12){
                if(tercero <= 31){
                    if (primero<=99)
                       primero +=1900

                    if ((mes1 - segundo) < 0){  //por si no ha cumplido años...
                        console.log(segundo);
                    
                        var año = (año1 - primero) - 1; 
                        document.formulario.resultado1.value = año;
                    }
                
                    if ((mes1 - segundo) > 0){ //por si sí
                        console.log('prueba funciona');
                    
                        var año = año1 - primero; 
                        document.formulario.resultado1.value = año;
                    }
                
                    if (dia1 - tercero >= 0){  //por resulta que cumplió en ese mes
                        var año = año1 - primero; 
                        console.log('parece que hay un error con '+ año);
                    
                        document.formulario.resultado1.value = año;
                    }
                
                    var mes = 12 - mes1;
                
                    if (mes==12){ var dia = 31-tercero; }
                    if (mes==11){ var dia = 30-tercero; }   
                    if (mes==10){ var dia = 31-tercero; }  
                    if (mes==9) { var dia = 30-tercero; } 
                    if (mes==8) { var dia = 31-tercero; }   
                    if (mes==7) { var dia = 30-tercero; }   
                    if (mes==6) { var dia = 31-tercero; }  
                    if (mes==5) { var dia = 31-tercero; } 
                    if (mes==4) { var dia = 30-tercero; } 
                    if (mes==3) { var dia = 31-tercero; }
                    if (mes==2) { var dia = 28-tercero; }
                    if (mes==1) { var dia = 31-tercero; }
                
                    // document.formulario.resultado1.value = año;
                    document.formulario.resultado2.value = mes;
                    document.formulario.resultado3.value = dia;
                }else{
                    alert("No puede ingresar un día mayor de 31");
                    console.log('Error, día '+tercero);
                    borrar();
                }
            }else{
                alert("No puede ingresar un mes mayor de 12");
                console.log('Error, mes '+segundo);
                borrar();
            }
        }else{
            alert("No puede ingresar un año que no ha pasado");
            console.log('Error, año '+primero);
            borrar();
        }
}

function borrar(){
    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.numero3.value="";

    document.formulario.resultado1.value="";
    document.formulario.resultado2.value = "";
    document.formulario.resultado3.value = "";
}