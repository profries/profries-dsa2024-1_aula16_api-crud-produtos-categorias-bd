const produtoService = require('../service/produto_service');

async function listar(req, res) {
    try {
        res.json(await produtoService.listar());
    }
    catch (err) {
        res.status(err.id).json(err);
    }            
}

async function inserir(req, res) {
    let produto = req.body;
    
    try {
        const produtoInserido = await produtoService.inserir(produto);
        res.status(201).json(produtoInserido);
    } 
    catch (err) {
        res.status(err.id).json(err);
    }    
}

async function buscarPorId(req, res) {
    const id = +req.params.id;    
    try{
        const produtoComId = await produtoService.buscarPorId(id);
        res.json(produtoComId);
    }
    catch(err) {
        res.status(err.id).json(err);
    }        
}

async function atualizar(req, res) {
    let produto = req.body;
    const id = +req.params.id;
    try {
        const produtoAtualizado = await produtoService.atualizar(id, produto);
        res.json(produtoAtualizado)
    }
    catch(err) {
        res.status(err.id).json(err);
    }
}

async function deletar(req, res){
    const id = +req.params.id;
    try {
        const produtoDeletado = await produtoService.deletar(id);
        res.json(produtoDeletado);        
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