const pool = require('../config/db_pgsql');
const queries = require('../queries/authors.queries') // Queries SQL

// GET ALL
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD
        //Itenta lanzar la Query (Que está guardada en un objeto) para evitar un SQL Injection 
        const data = await client.query(queries.getAllAuthors)
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

//GET Authors by email
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD
        //Itenta lanzar la Query (Que está guardada en un objeto) para evitar un SQL Injection 
        //se le pasa la query queries.getEntriesByEmail y después de la , 
        //se le añade el segundo parámetro $1 [email] 
        const data = await client.query(queries.getAuthorsByEmail, [email])
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

//CREATE Author
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount;
        console.log(data);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};


//UPDATE author by email
const updateAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [
            name, 
            surname, 
            email, 
            image
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

//DELETE author by email
const deleteAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion con la BBDD 
        const data = await client.query(queries.deleteAuthor, [email]);
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

const authors = {
    getAllAuthors,
    getAuthorsByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthorByEmail
}

module.exports = authors;

//PRUEBAS
/*let newEntry = {
    name: "Jorge",
    surname: "Lillo",
    email: "jgarcia78@gmail.com",
    image: "https://i.pinimg.com/236x/eb/09/69/eb096917cedb8fd3b3363d3dec531baa.jpg",
};*/

/*deleteAuthorByEmail('sergiolillos@hotmail.com')
   .then(data => console.log(data));*/