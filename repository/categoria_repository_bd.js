const {Pool} = require('pg');

const pool = new Pool({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5432,
    database:"crud_produtos_categorias"
})

async function listar() {
    const cliente = await pool.connect();
    const result = await cliente.query("SELECT * FROM categorias");
    const listaCategorias = result.rows;   
    cliente.release();
    return listaCategorias;
}

async function inserir(categoria) {
    const cliente = await pool.connect();
    const sql = "INSERT INTO categorias(nome) VALUES ($1) RETURNING *";
    const values = [categoria.nome];
    const result = await cliente.query(sql, values);
    const categoriaInserida = result.rows[0];
    cliente.release();
    return (categoriaInserida);
}

async function buscarPorId(id) {
    const cliente = await pool.connect();
    const sql = "SELECT * from categorias WHERE id=$1";
    const values = [id];
    const result = await cliente.query(sql, values);
    const categoriaEncontrada = result.rows[0];
    cliente.release();
    return (categoriaEncontrada);

}

async function atualizar(id, categoria) {
    const sql = 'UPDATE categorias set nome=$1 WHERE id=$2 RETURNING *'
    const values = [categoria.nome, id];

    const cliente = await pool.connect();
    const result = await cliente.query(sql, values);
    const categoriaAtualizada = result.rows[0];
    cliente.release();
    return (categoriaAtualizada);
}

async function deletar(id) {
    const sql = 'DELETE FROM categorias WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = await pool.connect();
    const result = await cliente.query(sql, values);
    const categoriaDeletada = result.rows[0];
    cliente.release();
    return (categoriaDeletada);
}

module.exports = {
    listar, 
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
