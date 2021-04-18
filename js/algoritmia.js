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
    var letras = /^[A-Z,]+$/;
        if(document.querySelector('#p3-input').value.match(letras)){
            
            console.log('piola');

            var p3_input = document.querySelector('#p3-input').value;
            //tenemos que detectar la coma que divide la cadena y meterlo dentro de un array
        
            // separamos las palabras ingresadas
            var p3_array = p3_input.split(',');
                console.log('La cadena original es: "' + p3_input + '"');
                // console.log('El separador es: "' + ',' + '"');
                console.log('El array tiene '+ p3_array.length + " elementos: ");
                
                var cuenta_a = 0;
                var cuenta_b = 0;
                var cuenta_c = 0;
                var cuenta_d = 0;
                var cuenta_e = 0;
                var cuenta_f = 0;
                var cuenta_g = 0;
                var cuenta_h = 0;
                var cuenta_i = 0;
                var cuenta_j = 0;
                var cuenta_k = 0;
                var cuenta_l = 0;
                var cuenta_m = 0;
                var cuenta_n = 0;
                var cuenta_ñ = 0;
                var cuenta_o = 0;
                var cuenta_p = 0;
                var cuenta_q = 0;
                var cuenta_r = 0;
                var cuenta_s = 0;
                var cuenta_t = 0;
                var cuenta_u = 0;
                var cuenta_v = 0;
                var cuenta_w = 0;
                var cuenta_x = 0;
                var cuenta_y = 0;
                var cuenta_z = 0;

                // console.log(p3_array);
            
                
                for (var i=0; i < p3_array.length; i++) {
                    console.log(p3_array[i]);
                    // console.log(p3_array[0]);
                    var p3_res = '';
        
                    // p3_array.forEach(p3_array.indexOf('a'), p3_a);

                    // p3_array.forEach(function (palabra, i){
                    //     if(i != 0 || i != p1_array.length) p1_res += ' ';
                    //     p1_res += palabra;
                    // });
                        
                        var p3_A = p3_array[i].indexOf('A');
                        var p3_B = p3_array[i].indexOf('B');
                        var p3_C = p3_array[i].indexOf('C');
                        var p3_D = p3_array[i].indexOf('D');
                        var p3_E = p3_array[i].indexOf('E');
                        var p3_F = p3_array[i].indexOf('F');
                        var p3_G = p3_array[i].indexOf('G');
                        var p3_H = p3_array[i].indexOf('H');
                        var p3_I = p3_array[i].indexOf('I');
                        var p3_J = p3_array[i].indexOf('J');
                        var p3_K = p3_array[i].indexOf('K');
                        var p3_L = p3_array[i].indexOf('L');
                        var p3_M = p3_array[i].indexOf('M');
                        var p3_N = p3_array[i].indexOf('N');
                        var p3_Ñ = p3_array[i].indexOf('Ñ');
                        var p3_O = p3_array[i].indexOf('O');
                        var p3_P = p3_array[i].indexOf('P');
                        var p3_Q = p3_array[i].indexOf('Q');
                        var p3_R = p3_array[i].indexOf('R');
                        var p3_S = p3_array[i].indexOf('S');
                        var p3_T = p3_array[i].indexOf('T');
                        var p3_U = p3_array[i].indexOf('U');
                        var p3_V = p3_array[i].indexOf('V');
                        var p3_W = p3_array[i].indexOf('W');
                        var p3_X = p3_array[i].indexOf('X');
                        var p3_Y = p3_array[i].indexOf('Y');
                        var p3_Z = p3_array[i].indexOf('Z');
    
                        if(p3_A !== -1){
                            cuenta_a ++;
                            console.log('esta palabra tiene a' , cuenta_a);
                        }
                        if(p3_B !== -1){
                            cuenta_b ++;
                            console.log('esta palabra tiene b' , cuenta_b);
                        }
                        if(p3_C !== -1){
                            cuenta_c ++;
                            console.log('esta palabra tiene c' , cuenta_c);
                        }
                        if(p3_D !== -1){
                            cuenta_d ++;
                            console.log('esta palabra tiene d' , cuenta_d);
                        }
                        if(p3_E !== -1){
                            cuenta_e ++;
                            console.log('esta palabra tiene e' , cuenta_e);
                        }
                        if(p3_F !== -1){
                            cuenta_f ++;
                            console.log('esta palabra tiene f' , cuenta_f);
                        }
                        if(p3_G !== -1){
                            cuenta_g ++;
                            console.log('esta palabra tiene g' , cuenta_g);
                        }
                        if(p3_H !== -1){
                            cuenta_h ++;
                            console.log('esta palabra tiene h' , cuenta_h);
                        }
                        if(p3_I !== -1){
                            cuenta_i ++;
                            console.log('esta palabra tiene i' , cuenta_i);
                        }
                        if(p3_J !== -1){
                            cuenta_j ++;
                            console.log('esta palabra tiene j' , cuenta_j);
                        }
                        if(p3_K !== -1){
                            cuenta_k ++;
                            console.log('esta palabra tiene k' , cuenta_k);
                        }
                        if(p3_L !== -1){
                            cuenta_l ++;
                            console.log('esta palabra tiene l' , cuenta_l);
                        }
                        if(p3_M !== -1){
                            cuenta_m ++;
                            console.log('esta palabra tiene m' , cuenta_m);
                        }
                        if(p3_N !== -1){
                            cuenta_n ++;
                            console.log('esta palabra tiene n' , cuenta_n);
                        }
                        if(p3_Ñ !== -1){
                            cuenta_ñ ++;
                            console.log('esta palabra tiene ñ' , cuenta_ñ);
                        }
                        if(p3_O !== -1){
                            cuenta_o ++;
                            console.log('esta palabra tiene o' , cuenta_o);
                        }
                        if(p3_P !== -1){
                            cuenta_p ++;
                            console.log('esta palabra tiene p' , cuenta_p);
                        }
                        if(p3_Q !== -1){
                            cuenta_q ++;
                            console.log('esta palabra tiene q' , cuenta_q);
                        }
                        if(p3_R !== -1){
                            cuenta_r ++;
                            console.log('esta palabra tiene r' , cuenta_r);
                        }
                        if(p3_S !== -1){
                            cuenta_s ++;
                            console.log('esta palabra tiene s' , cuenta_s);
                        }
                        if(p3_T !== -1){
                            cuenta_t ++;
                            console.log('esta palabra tiene t' , cuenta_t);
                        }
                        if(p3_U !== -1){
                            cuenta_u ++;
                            console.log('esta palabra tiene u' , cuenta_u);
                        }
                        if(p3_V !== -1){
                            cuenta_v ++;
                            console.log('esta palabra tiene v' , cuenta_v);
                        }
                        if(p3_W !== -1){
                            cuenta_w ++;
                            console.log('esta palabra tiene w' , cuenta_w);
                        }
                        if(p3_X !== -1){
                            cuenta_x ++;
                            console.log('esta palabra tiene x' , cuenta_x);
                        }
                        if(p3_Y !== -1){
                            cuenta_y ++;
                            console.log('esta palabra tiene y' , cuenta_y);
                        }
                        if(p3_Z !== -1){
                            cuenta_z ++;
                            console.log('esta palabra tiene z' , cuenta_z);
                        }
                        
                        // console.log(total);
                
                    // cuenta caracteres

                    let letra = p3_array[i].toLowerCase();
                    let arreglo=[];
                    str = p3_input.split('');

                    str.map(n => {
                        if(n.toLowerCase() === letra){
                            arreglo.push(n);
                        } 
                        
                    })

                    document.querySelector('#p3-output').textContent = p3_res;
                
                }
        
            document.querySelector('#p3-output').textContent = p3_res;
        
        }else{
        console.log('truste');
        alert('Por favor, ingrese únicamente letras en mayúsculas sin espacios');
        return false;
        }
        
}