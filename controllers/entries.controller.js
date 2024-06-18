const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    try {
        if (req.query.email) {
            entries = await entry.getEntriesByEmail(req.query.email);
        }
        else {
            entries = await entry.getAllEntries();
        }
        res.status(200).json(entries); // [] con las entries encontradas
    } catch (error) {
        res.status(500).json({ error: "Error en la BBD" });
    }
};

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
            const response = await entry.createEntry(newEntry);
            res.status(201).json({
                items_created: response,
                data: newEntry
            });
};

// PUT http://localhost:3000/api/entries
/*{
    "title": "Estamos de lunes de Back 2",
    "content": "La venganza del elefante relacional SQL",
    "date":"2024-06-17",
    "email": "guillermu@thebridgeschool.es",
    "category": "Software",
    "old_title":"Estamos de Lunes de Back"
}*/

// Actualizar entry por email
const updateEntry = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,email,category,old_title}
    if (
      "title" in modifiedEntry &&
      "content" in modifiedEntry &&
      "date" in modifiedEntry &&
      "email" in modifiedEntry &&
      "category" in modifiedEntry &&
      "old_title" in modifiedEntry
    ) {
      try {
        const response = await entry.updateEntry(modifiedEntry);
        res.status(201).json({
          items_updated: response,
          data: modifiedEntry,
          message: `Se ha modificado la entry ${response.title}`
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };

//DELETE
//http://localhost:3000/api/entries
//Eliminar entry por título
const deleteEntry = async (req, res) => {
  let entries;
  try {
      if (req.query.title) {
          entries = await entry.deleteEntryByTitle(req.query.title);
      }
      res.status(200).json({message: `Se ha borrado la entry ${req.query.title}.`}); // message de borrado
  } catch (error) {
      res.status(500).json({ error: "Error en la BBD" });
  }
};



module.exports = {
    getEntries,
    createEntry,
    deleteEntry, // DELETE
    updateEntry //PUT
};