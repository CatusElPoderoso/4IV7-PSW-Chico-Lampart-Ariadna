<!DOCTYPE html>
<html>
    <head>
        <title>CRUD</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, 
              initial-scale=1.0">
        <link rel="stylesheet" href="./CSS/masterstyle.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,800;1,500&display=swap" rel="stylesheet">
    </head>
    <body oncopy="return false" onpaste="return false">
        <div class="container" >
            <form class="formulario" name="formulario" method="post"  
                  action="Registro">
                <p>En los campos 
                    <em>«Nombre», «Apellido Paterno»</em> y <em>«Apellido Materno»</em>
                    ingrese únicamente letras sin acentos ni espacios:
                </p>
                <table class="formulario">
                    <tr>
                        <td><label>Nombre:</label></td>
                        <td> <input type="text" name="nombre" id="nombre"></td>
                    </tr>
                    <tr>
                        <td><label>Apellido Paterno:</label></td>
                        <td><input type="text" name="appat"  id="appat"></td>
                    </tr>
                    <tr>
                        <td><label>Apellido Materno:</label></td>
                        <td><input type="text" name="appmat" id="appmat"></td>
                    </tr>
                    <tr>
                        <td><label>Edad:</label></td>
                        <td><input type="number" name="edad" id="edad" min="01" max="99" size="2"></td>
                    </tr>
                    <tr>
                        <td><label>Correo:</label></td>
                        <td><input type="email" name="email" id="email"></td>
                    </tr>
                    <tr>
                        <td><input class="boton borrar" type="reset" value="Borrar Registro"></td>
                        <td><input class="boton ingresar" type="submit" value="Enviar Datos de Registro" onclick="caracteres()"></td>
                    </tr>
                </table>
            </form>
        </div>

        <br>

        <div class="container" >
            <form method="post" name="formularioeliminar" action="Eliminar">
                <label>Ingresa el ID del usuario que deseas eliminar</label>
                <input type="number" name="ideliminar" id="eliminar" min="01" max="99" size="2"  >
                <input class="boton borrar" type="submit" value="Eliminar Usuario" onclick="borrar()">
            </form>
        </div>
        
        <br>
        
        <div class="container centrar">
            <form method="get" name="formularioconsultar" action="Consultar">
                <input class="boton" type="submit" value="Consultar Tabla General de Usuarios" >
            </form>
        </div>
        
        <br>

        <div class="container">
            <form method="post" name="formulariogestionar" action="Actualizar" class="formulario">
                
                <p>Vuelva a ingresar todos sus datos:</p>

                <table class="formulario">
                    <tr>
                        <td>Ingresa el ID del usuario que deseas cambiar:</td>
                        <td><input type="number" name="idactualizar" id="actualizar" min="01" max="99" size="2"></td>
                    </tr>
                    <tr>
                        <td><label>Nuevo nombre:</label></td>
                        <td> <input type="text" name="nombre_2" id="nombre_2"></td>
                    </tr>
                    <tr>
                        <td><label>Nuevo Apellido Paterno:</label></td>
                        <td><input type="text" name="appat_2"  id="appat_2"></td>
                    </tr>
                    <tr>
                        <td><label>Nuevo Apellido Materno:</label></td>
                        <td><input type="text" name="apmat_2" id="appmat_2"></td>
                    </tr>
                    <tr>
                        <td><label>Nueva Edad:</label></td>
                        <td><input type="number" name="edad_2" id="edad_2" min="01" max="99" size="2"></td>
                    </tr>
                    <tr>
                        <td><label>Nuevo Correo:</label></td>
                        <td><input type="email" name="email_2" id="email_2"></td>
                    </tr>
                    <tr>
                        <td><input class="boton borrar" type="reset" value="Borrar Registro"></td>
                        <td><input class="boton ingresar" type="submit" value="Actualizar Usuario" onclick="cambiar(event)"></td>
                    </tr>
                </table>
            </form>
        </div>


        <!-- <div class="actualizar container" >
            <form>
                <label>Tarea wiiiiii UwU/
                quiero que se pueda actualizar los datos de los registros, por ejemplo
                que se pueda cambiar:
                nombre, appat, apmat, edad, correo o todos los datos
                Es por ello que deben de ocupar 
                UPDATE mregistro SET appat_usu = variable1 where id_usu = variable2 </label>
            </form>
        </div> -->

        <script src="./JS/formulario.js" type="text/javascript"></script>
    </body>
</html>