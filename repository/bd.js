const {Pool} = require('pg');

//Isolar o Pool - evita redundancia de codigo e de instanciacao.
const pool = new Pool({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5432,
    database:"crud_produtos_categorias"
})

async function connect() {
    return await pool.connect();
}

module.exports = {
    connect
} 