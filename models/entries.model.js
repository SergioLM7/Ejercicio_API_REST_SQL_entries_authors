const pool = require('../config/db_pgsql');
const queries = require('../queries/entry.queries') // Queries SQL




// GET ALL
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD
        //Itenta lanzar la Query (Que está guardada en un objeto) para evitar un SQL Injection 
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } //Para cerrar la conexión con la BBDD
    finally {
        client.release();
    }
    return result
};

// GET By Email
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD
        //Itenta lanzar la Query (Que está guardada en un objeto) para evitar un SQL Injection 
        //se le pasa la query queries.getEntriesByEmail y después de la , 
        //se le añade el segundo parámetro $1 [email] 
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } //Para cerrar la conexión con la BBDD
    finally {
        client.release();
    }
    return result
};

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry, [title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry, [
            title,
            content,
            date,
            email,
            category,
            old_title
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release(); //Cierra la conexión con la BBDD
    }
    return result
};

//DELETE
const deleteEntryByTitle = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD 
        const data = await client.query(queries.deleteEntry, [title]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } //Para cerrar la conexión con la BBDD
    finally {
        client.release();
    }
    return result
};


const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntryByTitle,
    updateEntry
}

module.exports = entries;

// Pruebas
/*let newEntry = {
    title: "Estamos de lunes de Back 2",
    content: "La venganza del elefante relacional SQL",
    email: "guillermu@thebridgeschool.es",
    category: "Software",
    old_title: 'Estamos KO'
};*/

/*deleteEntryByTitle(title)
   .then(data => console.log(data))*/
