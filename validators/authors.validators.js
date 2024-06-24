
const {param, query, body} = require("express-validator");

/*name varchar(45) NOT NULL, 
surname varchar(45) NOT NULL, 
email varchar(100) NOT NULL UNIQUE,
image varchar(255)*/

const validateCreateAuthor =  [
   body("name")
     .exists()
     .withMessage("Author's name is required")
     .isString()
     .withMessage("Name should be string")
     .isLength({max: 45})
     .withMessage("Name should be less than 45 characters"),
   body("surname")
     .exists()
     .withMessage("Author's surname is required")
     .isString()
     .withMessage("Surname should be string")
     .isLength({ max: 45 })
     .withMessage("Surname should be less than 45 characters"),
   body("email")
     .exists()
     .withMessage("Email is required")
     .isEmail()
     .withMessage("Email needs an email format")
     .isLength({max: 100})
     .withMessage("Email should be less than 100 characters"),
   body("image")
     .exists()
     .withMessage("Image is required")
     .isString()
     .withMessage("Image must be string")
     .isURL()
     .withMessage("Image should have a URL format")
     .isIn([ "PNG", "JPEG", "GIF", "JPG" ])
     .withMessage("Image should have a validate extension"),
   ];

 const validateDeleteAuthor =  [
   param('id').custom(async (id) => {
    const existeEnEntries = await entries.exists({ id_author: id });
    if (existeEnEntries) {
      throw new Error('No se puede eliminar porque hay elementos relacionados en Entries');
    }
    return true;
  }).withMessage("To delete an author you should delete first all his/her entries")
   
]

module.exports = {
   validateCreateAuthor,
   validateDeleteAuthor
}


