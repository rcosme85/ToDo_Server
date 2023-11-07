
Bienvenidos!!
## ** PROYECTO: APLICACIÓN TODO

## ** RESUMEN - FUNCIONALIDAD DEL BACK

## CONSIDERACIONES IMPORTANTES 

- Pasos para conectar la base de datos a la aplicación (en local)
1. En PostgreSql crear una base de datos con el nombre de: todo
2. En el archivo .env guardar las credenciales para acceder a la base de datos.
DB_USER=postgres
DB_PASSWORD=(Ingrese su contraseña)
DB_HOST=localhost

-  **`DISEÑO ENTIDAD RELACIÓN`**
Se han creado tres entidades:
    - todoList
    - Users
    - categories
La imagen del diagrama está guardado en el servicio de AWS.


![Entidad Relacion]( https://s3-pf40a.s3.sa-east-1.amazonaws.com/Personal/Entity.jpg)

-  **`CONFIGURACIÓN DEL BACK`**
- El framework Express, que nos permite crear un servidor.
- ORM Sequelize, es una herramienta que permite interactuar con la base de datos
- Con el motor de Base de datos PostreSQL. Permite crear, gestionar y consultar bases de datos relacionales.

-  **`RUTAS – HANDLER Y CONTROLLER`**
- Se organizó con este orden:
Ruta / Handler / Controller

De las rutas principales se subdivide en otras rutas más.
![Rutas Principales](https://s3-pf40a.s3.sa-east-1.amazonaws.com/Personal/Router.jpg)

-  **`ENDPOINTS`**
- La descripción de los endPoinst está en un archivo de excel. Hay 3 hojas en el archivo con:
5 EndPoints del modelo Users:
    Para obtener todos los users
    Para validar los datos del usuario al momento de hacer un Login.
    Para obtener un User por Id
    Para crear un nuevo usuario (A la hora de registrarse)

6 EndPoints del modelo TodoList:
    Para obtener todos los items de Todo
    Para obtener todos los items por Usuario
    Para crear un nuevo item de Todo
    Para modificar un item de Todo
    Para eliminar un item de Todo
    Para filtrar los items de Todo por Categoría

3 EndPoints del modelo Categories:
    Para obtener todos los items de Category
    Para crear un nuevo item de Category
    Para eliminar un item de Category

 14 endPoints en total. Cada uno de ellos tienen una descripción adecuada con su función (post, get, delete, put), también se especifica los datos requeridos para el buen funcionamiento, así como el resultado esperado.
![Descripcion EndPoints](https://s3-pf40a.s3.sa-east-1.amazonaws.com/Personal/ENDPOINTS+-+Descripcion.xlsx)

Todas las rutas fueron probadas con el aplicativo: Thunder, antes de hacerlas funcionar en el front.

## ** RESUMEN - FUNCIONALIDAD DEL FRONT

## **Frontend: **
El front fue desarrollado utilizando las siguientes tecnologías:
React, HTML, CSS

-  **`HOME`**
El home se divide en 3 secciones:

- La sección superior
    - Crear una categoría
    - Login y/o Registrar una cuenta

- La sección intermedia
    - Barra de búsqueda por Categoría

- La última parte maneja los datos de ToDo:
    - Form para crear un item
    - Eliminar un item (Antes de eliminar se deberá confirmar)
    - Modificar un item
## **![Descripcion Edit]https://s3-pf40a.s3.sa-east-1.amazonaws.com/Personal/Edit.png

    - Al final muestra un contador (Total, tareas completadas y pendientes)

## **Consideraciones: **
Al levantarse la aplicación no se apreciará ningún dato, porque muestra las tareas por usuario, estos son los pasos a seguir:

1) Realizar el registro (crear una cuenta)
## **![Pasos para crear una cuenta]https://s3-pf40a.s3.sa-east-1.amazonaws.com/Personal/Steps-Login.jpg

2) Realizar el login con su correo y contraseña. Al registrarse el id de usuario y el nombre se guardará en el Local Storage, estos se borrarán cuando realicen un Sign Out.

3) Crear las categorías. Este dato es importante para poder crear una lista de tareas.






