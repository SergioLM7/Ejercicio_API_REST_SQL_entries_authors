# API REST con Express y SQL - Posts de un blog

<a href="https://sergiolm7.github.io/ejercicio_api_rest_sql_entries_authors/" target="_blank"> <img src="banner-api-rest-sql.png"/></a> 

He creado una API REST con Express y Node.JS que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre entradas y autores en una base de datos relacional albergada en PostgreSQL. La BBDD y la API están desplegadas en Render.

# Link de acceso
-https://api-sql-bridge.onrender.com

## Contenido

- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Base de Datos](#base-de-datos)
- [Tareas a realizar](#tareas-a-realizar)
- [Rutas de la API](#rutas-de-la-api)

## Tecnologías

- Node.js
- PostgreSQL
- pgAdmin 4

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/SergioLM7/Ejercicio_API_REST_SQL_entries_authors
cd Ejercicio_API_REST_SQL_entries_authors
```

2. Instala las dependencias
npm install

3. Configura la base de datos en config.js con tus credenciales de PostgreSQL.

## Como usar la API
### Entries
# API REST con Express y SQL - Posts del blog

## Como usar la API
### Entries

- [GET] /api/entries: devuelve una respuesta con los datos del autor y sin ID de la entry.
```js
{
  "title": "noticia desde Node",
  "content": "va a triunfar esto2",
  "date": "2022-03-20T23:00:00.000Z",
  "category": "sucesos",
  "name": "Alejandru",
  "surname": "Regex",
  "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
```

-[PUT] /api/entries/: modifica una entry por completo con nuevos datos y retorna un status 200. Buscar por título para editar entry.

Payload:
```js
{message: "Se ha modificado la entry 'Título de noticia' "}
```

- [DELETE] /api/entries/: borra una entry y retorna un status 200. Búsqueda por título de entry para borrar. 

Payload: 
```js
{message: "Se ha borrado la entry 'Título de noticia' "}
```

### Authors
- [GET] /api/authors: retorna un objeto con los datos de todos los autores y un status 200.

Payload:
```js
{
    "id_author": 1,
    "name": "Alejandru",
    "surname": "Regex",
    "email": "alejandru@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
},
{
    ...
}
...
```

- [GET] /api/authors?email=email@prueba.com: retorna un objeto con los datos del autor buscado por su email y retorna también un status 200.

Payload:

```js
{
    "id_author": 1,
    "name": "Alejandru",
    "surname": "Regex",
    "email": "email@prueba.com",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
```

- [POST] /api/authors/: se envían por POST los datos del autor a crear y retorna un status 201. 

Payload:
```js
{message: "usuario creado: guillermu@thebridgeschool.es"}
```

- [PUT] /api/authors/email@prueba.com: actualiza los datos de un autor por su email y retorna un status 200. 
Payload: 
```js
{message: "usuario actualizado: guillermu@thebridgeschool.es"}
```

- [DELETE] /api/authors/email@prueba.com: borra un autor por su email y retorna un status 200.
Payload: 
```js
{message: "Se ha borrado guillermu@thebridgeschool.es"}
```

## Author
**Sergio Lillo, Full Stack Development Student in The Bridge**
<a href="https://www.linkedin.com/in/lillosergio/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width=30px, height=30px/></a> 
