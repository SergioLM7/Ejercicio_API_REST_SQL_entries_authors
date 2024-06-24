# EJERCICIO - API REST con Express - Posts del blog

## Fichero queries
[Fichero queries SQL](https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_sep23_MAD/blob/master/utils/ejercicioSQL/queries.sql)

## Cómo instalar
XXXXXXX


## Como usar la API
### Entries
- [GET] http://localhost:3000/api/entries

Devuelve una respuesta con los datos del autor y sin ID de la entry:
```
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

- [PUT] http://localhost:3000/api/entries/: modifica una entry por completo con nuevos datos y retorna un status 200. Buscar por título para editar entry.

Payload:
```
{message: "Se ha modificado la entry 'Título de noticia' "}

```

- [DELETE] http://localhost:3000/api/entries/: borra una entry y retorna un status 200. Búsqueda por título de entry para borrar. 

Payload: 
```
{message: "Se ha borrado la entry 'Título de noticia' "}
```

### Authors
- [GET] http://localhost:3000/api/authors: retorna un objeto con los datos de todos los autores y un status 200.

Payload:
```
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

- [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es Retorna un objeto con los datos del autor buscado por su email y retorna también un status 200.

Payload:

```
{
    "id_author": 1,
    "name": "Alejandru",
    "surname": "Regex",
    "email": "alejandru@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
```

- [POST] http://localhost:3000/api/authors/ Se envía por POST los datos del autor a crear y retorna un status 201. Payload:
```
{message: "usuario creado: guillermu@thebridgeschool.es"}
```

- [PUT] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es Actualiza los datos de un autor por su email y retorna un status 200. 
Payload: 
```
{message: "usuario actualizado: guillermu@thebridgeschool.es"}
```

- [DELETE] http://localhost:3000/api/authors/alejandru@thebridgeschool.es Borra un autor por su email y retorna un status 200.
Payload: 
```
{message: "Se ha borrado guillermu@thebridgeschool.es"}
```