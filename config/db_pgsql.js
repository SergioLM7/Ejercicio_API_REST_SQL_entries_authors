const { Pool } = require('pg');

//Datos de conexión
const pool = new Pool ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
      }
})


/*const pool = new Pool({
    host: 'dpg-cpoqlr2ju9rs738udsj0-a.frankfurt-postgres.render.com',
    port: 5432,
    user: 'ejercicio_api_rest_83aa_user',
    password: '77lkquCGPvt0jbFhxPlf188aWsxpXVu8',
    database: 'ejercicio_api_rest_83aa',
    ssl: {
        rejectUnauthorized: false
      }
});*/

module.exports = pool;