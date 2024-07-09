const categoriaService = require('../service/categoria_service');

async function listar(req, res) {
    try {
        res.json(await categoriaService.listar());
    }
    catch (err) {
        res.status(err.id).json(err);
    }            
}

async function inserir(req, res) {
    let categoria = req.body;
    
    try {
        const categoriaInserida = await categoriaService.inserir(categoria);
        res.status(201).json(categoriaInserida);
    } 
    catch (err) {
        res.status(err.id).json(err);
    }    
}

async function buscarPorId(req, res) {
    const id = +req.params.id;    
    try{
        const categoriaComId = await categoriaService.buscarPorId(id);
        res.json(categoriaComId);
    }
    catch(err) {
        res.status(err.id).json(err);
    }        
}

async function atualizar(req, res) {
    let categoria = req.body;
    const id = +req.params.id;
    try {
        const categoriaAtualizada = await categoriaService.atualizar(id, categoria);
        res.json(categoriaAtualizada)
    }
    catch(err) {
        res.status(err.id).json(err);
    }
}

async function deletar(req, res){
    const id = +req.params.id;
    try {
        const categoriaDeletada = await categoriaService.deletar(id);
        res.json(categoriaDeletada);        
    }
    catch(err) {
        res.status(err.id).json(err);
    }        
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}