const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'diplomski',
    password: 'bazepodataka',
    port: 5432,
});

const sql_create_users = `
    DROP TABLE IF EXISTS users cascade ;
    CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );    
`

async function baza(){
    await pool.query(sql_create_users, [], (err, result) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful creation of the 'users' table");
    });
}
baza();