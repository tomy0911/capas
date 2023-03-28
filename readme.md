## Rutas

| Método | Endpoint            | Descripción                                                                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| POST   | **/login**          | Formulario de login. Las sesesiones son almacenadas en mongoAtlas                                                              |
| POST   | **/logout**         | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                           |
| GET    | **/productos**      | Me permite listar todos los productos disponibles                                                                              |
| POST   | **/productos**      | Para incorporar productos al listado                                                                                           |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                             |
| GET    | **/chat**           | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |
| GET    | **/info**           | Muestra información relativa a la app     