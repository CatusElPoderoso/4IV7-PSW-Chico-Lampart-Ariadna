import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//de poder realizar la conexion con la bd
import java.sql.Connection;
import java.sql.DriverManager;
//de poder realizar las sentencias sql, create, insert, delete, drop, update, alter
import java.sql.Statement;
//de poder realizar las consultas a la bd
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author demon
 */
public class Actualizar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //vamos a crear el metodo constructor
    
    //vamos a crear el metodo constructor
    
    public void init(ServletConfig cfg) throws ServletException{
        //para conectarnos con la bd
        String url = "jdbc:mysql:3306//localhost/registro";
                    //driver:gestorbd:puerto//IP/nombrebd
                    
        String userName = "root";
        String password = "servidorxd";
        
        try{
            
            Class.forName("com.mysql.jdbc.Driver");
            /*
            a veces el driver ya maneja por defecto el puerto de comunicacion
            es por ello que pueden mandar un error, en ese caso
            url = "jdbc:mysql://localhost/registro4iv7";
            */
            url = "jdbc:mysql://localhost/registro";
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Se ha conectado a la BD");
        
        }catch(Exception e ){
            System.out.println("No se ha conectado a la BD");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<link rel=\"stylesheet\" href=\"./CSS/masterstyle.css\">");
            out.println("<title>Servlet Eliminar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<table class=\"formulario\">"
                    + "<tr><td><label>Nombre:</label></td>"
                    + "<td><input type=\"text\" name=\"nombre_2\" id=\"nombre_2\"></td></tr>");
            out.println("");
            out.println("");
            out.println("");
            out.println("");
            
            String nombre2 = request.getParameter("nombre_2");
            int id;
            
            id = Integer.parseInt(request.getParameter("idactualizar"));
            
            /*
            para poder cambiar es 
            UPDATE mregistro SET appat_usu = variable1 where id_usu = variable2
            */
            String q = "UPDATE registro SET nom_usu =" + nombre2 + "where id_usu = " + id;
            
            out.println("<tr><td colspan='2'><input class=\"boton ingresar\" type=\"submit\" "
                    + "value=\"Actualizar Datos\" onclick=\"caracteres()\">"
                    + "</td></tr>");
            
            try{
                
                set.executeUpdate(q);
                System.out.println("Registro eliminado con exito");
                
                out.println("<h1 class='titulo'>Registro Eliminado</h1>");
            }catch(Exception e){
                out.println("<h1 class='titulo'>Registro No Eliminado, sucedio un error</h1>");
                System.out.println("Error al eliminar el registro");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            
            }

            out.println("<div class='encimar'><a href='index.html' class='boton'>Regresar al Formulario</a>"
                    + "<br>"
                    + "<a href='Registro' class='boton'>Registrar un Nuevo Usuario</a>"
                    + "<br>"
                    + "<a href='Consultar' class='boton'>Consultar la Tabla General de Usuarios</a></div>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}