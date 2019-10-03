UTILIZAR RAW O BLAME PARA QUE NO PIERDA EL FORMATO

IMPORTANCIA Y BENEFICIOS DE UTILIZAR DOCKER

Al utilizar Docker, nosotros los desarrolladores podemos dejar de pensar si el código que estamos desarrollando va 
a funcionar en la máquina en la que se va a ejecutar, por ejemplo si yo estoy trabajando con java 8, 
y un compañero con java 7, en el caso de que necesite que mi compañero ejecute mi programa, 
quizá no le funcione porque no tiene todas las funcionalidades necesarias, para solucionar esto, 
creamos un contenedor en Docker con java 8 en la cual se puede ejecutar la aplicación sin ningún problema.
También es útil para trabajar en entornos de prueba, ya que son fáciles de crear y borrar, y no son pesados. 
Y esto último, también es útil, ya que los contenedores son menos pesados que las máquinas virtuales, 
lo cual es una buena ventaja.


API_URL: http://localhost:4000/api
DOCKER: https://hub.docker.com/r/juancardona11/api-node

RUTAS:

Obtener colección: http://localhost:4000/api/collection  //GET

Crear Alumno: http://localhost:4000/api/register     //POST
{	
        "name": "pablo",
        "phone": "123455",
        "email": "juan6",
        "curso": "ingenieria web",
        "age": "20",
        "id":"13371533",
        "grade": 4.5      
}

Buscar Alumno:http://localhost:4000/api/alumno     //GET
{	
      "id":"13371533"
}

Modificar Alumno: http://localhost:4000/api/modify    //POST
Se busca por id, y se cambian los demás parámetros
{	
        "name": "pablo",
        "phone": "123455",
        "email": "juan6",
        "curso": "ingenieria web",
        "age": "20",
        "id":"13371533",
        "grade": 4.5      
}

Borrar Alumno: http://localhost:4000/api/delete      //POST
Se busca por id
{
        “id”: "13371533"
}

Modificar todos:  http://localhost:4000/api/modifyAll     //POST
Se busca por curso
{
        “curso”: "ingenieria web",
        “nuevoCurso”: "campos"	
}

Obtener promedio: http://localhost:4000/api/grades    //POST
Se busca por curso
{
        “curso”: "ingenieria web"
}

