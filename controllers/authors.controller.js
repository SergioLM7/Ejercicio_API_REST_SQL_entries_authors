const entry = require('../models/authors.model'); // Importar el modelo de la BBDD
const {validateCreateAuthor} = require("express-validator");



// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email= --> byEmail
const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await entry.getAuthorsByEmail(req.query.email);
        } else {
            authors = await entry.getAllAuthors();
        }
        res.status(200).json(authors); // [] con todos los authors o con el del email que se ha pasado
    } catch (error) {
        res.status(500).json({ error: "Error en la BBD" });
    }
};

// CREATE Author
// POST http://localhost:3000/api/authors
// Crear author
const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const result = validateCreateAuthor(newAuthor);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    } else {
        const response = await entry.createAuthor(newAuthor);
        res.status(201).json({
            message: `usuario creado: ${newAuthor.email}`
        });
    }
};

// PUT http://localhost:3000/api/authors
// Actualizar author por email
const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {name, surname, email, image }
    if (
        "name" in modifiedAuthor &&
        "surname" in modifiedAuthor &&
        "email" in modifiedAuthor &&
        "image" in modifiedAuthor
    ) {
        try {
            const response = await entry.updateAuthor(modifiedAuthor);
            res.status(201).json({
                message: `Usuario actualizado: ${modifiedAuthor.email}`
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

//DELETE http://localhost:3000/api/authors/ 
//Eliminar author por email
const deleteAuthor = async (req, res) => {
    let authors;
    try {
        i



        if (req.query.email) {
            authors = await entry.deleteAuthorByEmail(req.query.email);
        }
        res.status(200).json({ message: `Se ha borrado el autor: ${req.query.email}.` }); // message de borrado
    } catch (error) {
        res.status(500).json({ error: "Error en la BBD" });
    }
};


module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
};