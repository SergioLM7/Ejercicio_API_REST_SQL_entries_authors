const queries = {
    getAllAuthors: `
    SELECT 
        *
    FROM 
        authors`,
    getAuthorsByEmail: `
    SELECT 
	    au.id_author, 
	    au.name, 
	    au.surname, 
	    au.email, 
	    au.image
    FROM 
        authors AS au
    WHERE 
        au.email = $1;`,
    createAuthor: `INSERT INTO authors (name, surname, email, image) 
    VALUES ($1, $2, $3, $4)`,
    updateAuthor: `
    UPDATE 
        authors
	SET 
        name=$1, 
        surname =$2, 
        email= $3, 
        image= $4
	WHERE 
        email=$3;`,
    deleteAuthor: `
    DELETE
    FROM authors
    WHERE authors.email= $1;`
}
module.exports = queries;