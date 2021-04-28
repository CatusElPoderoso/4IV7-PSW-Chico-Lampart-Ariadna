
function caracteres(){
    // sólo se aceptan letras mayúsculas y minúsculas. No espacios ni acentos.
    var letras = /^[A-Za-z]+$/;

    if(document.querySelector('#nombre').value.match(letras) && document.querySelector('#appat').value.match(letras) &&
    document.querySelector('#appmat').value.match(letras)){
        console.log('solo hay letras');
        return true;
    }
        if(document.querySelector('#nombre').value.trim()=="" || document.querySelector('#appat').value.trim()=="" ||
            document.querySelector('#appmat').value.trim()==""){
            console.log('hay espacios vacíos en registrar usuario')
            alert('Por favor, complete todos los espacios')
            event.preventDefault()
        }else{
                console.log('se trataron de ingresar otros caracteres');
                alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
                event.preventDefault()
            }       
}

function borrar(){
    // solo se aceptan numeros sin espacios
    var numeros = /^[0-9]+$/;

    if(document.querySelector('#eliminar').value.match(numeros) && document.querySelector('#eliminar').value.trim()!==""){
        console.log('solo hay números');
        return true;
    }
        if(document.querySelector('#eliminar').value.trim()==""){
            console.log('hay espacios vacíos en borrar usuario');
            alert('Por favor, ingrese el ID del usuario que desea eliminar');
            event.preventDefault()
        }else{
                console.log('se trataron de ingresar caracteres distintos a números');
                alert('Por favor, ingrese únicamente números para eliminar un usuario');
                event.preventDefault()
            }
}

function gestionar(){
    // solo se aceptan numeros sin espacios
    var numeros = /^[0-9]+$/;
    
    if((document.querySelector('#actualizar').value.match(numeros)) && 
            (document.querySelector('#actualizar').value.trim()!=="")){
        console.log('solo hay números');
        return true;
    }
        if(document.querySelector('#actualizar').value.trim()==""){
            console.log('hay espacios vacíos en gestionar usuario');
            alert('Por favor, ingrese el ID del usuario que desea cambiar');
            event.preventDefault()
        }else{
                console.log('se trataron de ingresar caracteres distintos a números');
                alert('Por favor, ingrese únicamente números para cambiar un usuario');
                event.preventDefault()
            }
}
function cambiar(){
    // sólo se aceptan letras mayúsculas y minúsculas. No espacios ni acentos.
    var letras = /^[A-Za-z]+$/;
    var numeros = /^[0-9]+$/;

    if(document.querySelector('#actualizar').value.match(numeros) && document.querySelector('#actualizar').value.trim()!==""){
        console.log('el ID tiene números y no está vacío');
        return true;
    }
        if(document.querySelector('#actualizar').value.trim()==""){
            console.log('el ID está vacío');
            alert('Por favor, ingrese un ID válido')
            event.preventDefault()
        }
            if(document.querySelector('#nombre_2').value.match(letras) && document.querySelector('#appat_2').value.match(letras) &&
            document.querySelector('#appmat_2').value.match(letras) && document.querySelector('#edad_2').value.match(letras) &&
            document.querySelector('#email_2').value.match(letras)){
                console.log('solo hay letras en los campos de actualizar usuario');
            }   
                if(document.querySelector('#nombre_2').value.trim()=="" && document.querySelector('#appat_2').value.trim()=="" &&
                document.querySelector('#appmat_2').value.trim()=="" && document.querySelector('#edad_2').value.trim()=="" &&
                document.querySelector('#email_2').value.trim()==""){
                    console.log('Todos los campos están vacíos')
                    alert('Todos los campos están vacíos, no se realizará ningún cambio')
                    event.preventDefault();
                }else{
                    console.log('se trataron de ingresar otros caracteres');
                    alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
                    event.preventDefault();
                }       
}
