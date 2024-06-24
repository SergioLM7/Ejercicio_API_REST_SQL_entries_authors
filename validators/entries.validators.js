
const {param, query, body} = require("express-validator");

/* id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL UNIQUE, 
  content text NOT NULL, 
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category varchar(15),
  FOREIGN KEY (id_author) REFERENCES authors(id_author)*/

const validateCreateEntry =  [
   body("title")
     .exists()
     .withMessage("Title is required")
     .isString()
     .withMessage("Title should be string")
     .isLength({max: 100})
     .withMessage("Title should be less than 45 characters"),
   body("content")
     .exists()
     .withMessage("Content is required")
     .isString()
     .withMessage("Content should be string"),
   body("id_author")
     .exists()
     .withMessage("Id_author is required")
     .isNumeric()
     .withMessage("Id_author must be numeric")
     .custom(async (id) => {
        const existeEnAuthors = await authors.exists({ id });
        if (existeEnAuthors) {
          throw new Error('You can not add this entry because the id_author does not exist.');
        }
        return true;
      })
     .withMessage("Id_author should have been created before"),
     body("category")
     .exists()
     .withMessage("Category is required")
     .isString()
     .withMessage("Category should be string")
     .isLength({max: 15})
     .withMessage("Category should have maximum 15 characters"),
   ];

 const validateDeleteEntry =  [
   param('title').notEmpty().withMessage("Title should exist to delete a book")
   
]

module.exports = {
   validateCreateEntry,
   validateDeleteEntry
}