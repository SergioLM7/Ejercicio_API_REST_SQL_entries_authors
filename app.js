const express = require('express'); //Importa el paquete express para poder usarlo
const app = express(); //Inicializa el servidor y lo guarda en una variable 'app'
const port = 3000; //El puerto en el que se va a lanzar el servidor

//Importar el Morgan
const morgan = require('./middlewares/morgan');
// Logger
app.use(morgan(':method :url :status - :response-time ms :body'));


//RUTAS
const entriesRoutes = require("./routes/entries.routes");
const authorsEntries = require("./routes/authors.routes");

app.use(express.json()); // Habilito recepción de JSON en servidor


app.get('/', (req, res) => {
    res.send('Hello World! Lets go coffe')
  });
  
  // Rutas
  //API A cada ruta le voy a poner el prefijo /api/
  app.use('/api/entries',entriesRoutes);
  app.use('/api/authors',authorsEntries);
  

  //El servidor va a escuchar en el port 3000 y lo va a lanzar en localhost
app.listen(port, () => {
    console.log(`Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`)
  })
  