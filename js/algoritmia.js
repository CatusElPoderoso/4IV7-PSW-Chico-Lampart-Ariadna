//problema 1 de tarea wiiiiii uwu mio uwu/

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;



    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p1_array = p1_input.split(' ').reverse();

  

      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}



//problema 2
function problema2(){
    //lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */

    //construir vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores 
    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir el resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}


//el tres queda de tarea wiiiiiiiiiii y hago el 1 wiiiiiiiiiii

// problema 3

function problema3(){

    // sólo se aceptan letras y comas
    var letras = /^[A-Za-z,]+$/;
        if(document.querySelector('#p3-input').value.match(letras)){
            
            console.log('piola');

            var p3_input = document.querySelector('#p3-input').value;
            //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
            //dentro de un array
        
            // separamos las palabras ingresadas
            var p3_array = p3_input.split(',');
                console.log('La cadena original es: "' + p3_input + '"');
                console.log('El separador es: "' + ',' + '"');
                console.log('El array tiene '+ p3_array.length + " elementos: ");

                for (var i=0; i < p3_array.length; i++) {
                   console.log(p3_array[i]);

                    p3_a = p3_array[i].indexOf('a');
                    // console.log(p3_a)

                    if(p3_array[i].indexOf("a") !== -1) {
                        console.log('no sé qué palabra sea, pero tiene a xd');
                    }

                }
            
            var p3_res = '';
        
        
            p3_array.forEach(function (palabra, i){
                if(i != 0 || i != p3_array.length) p3_res += ',';
                p3_res += palabra;
            });
        
            document.querySelector('#p3-output').textContent = p3_res;
        
        }else{
        console.log('truste');
        alert('Por favor, ingrese únicamente letras y espacios');
        return false;
        }
        
    


}