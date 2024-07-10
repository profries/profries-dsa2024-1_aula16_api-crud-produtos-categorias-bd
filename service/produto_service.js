const produtoRepository = require('../repository/produto_repository_bd')
const categoriaRepository = require('../repository/categoria_repository_bd')
async function listar() {
    try{ 
        return await produtoRepository.listar();
    }
    catch (err) {
        throw {id: 500, message:err.message }
    }
}

async function inserir(produto) {
    if(produto && produto.nome && produto.idCategoria && produto.preco) {// produto != undefined
        const categoriaExistente = await categoriaRepository.buscarPorId(produto.idCategoria);
        if(categoriaExistente) {
            try{ 
                return await produtoRepository.inserir(produto);
            }
            catch (err) {                
                throw {id: 500, message:err.message }
            }
        }
        else {
            throw {id:400, message:"Categoria relacionada não existe"};
        }
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou categoria ou preco"};
    }
}

async function buscarPorId(id) {
    let produto;
    try{ 
        produto = await produtoRepository.buscarPorId(id);
    }
    catch(err) {
        throw {id: 500, message:err.message }
    }

    if(produto) {
        return produto;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }

}

async function atualizar(id, produto) { 
    if(produto && produto.nome && produto.preco) {// produto != undefined
        let produtoAtualizado;     
        try {  
            produtoAtualizado =  await produtoRepository.atualizar(id,produto);  produtoRepository.atualizar(id,produto);
        } catch(err) {
            throw {id: 500, message:err.message }
        }
        
        if(produtoAtualizado) {
            return produtoAtualizado;
        }
        else {
            throw {id:404, message:"Produto nao encontrado"};
        }    
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }

}

async function deletar(id) {
    let produtoDeletado;     
    try {  
        produtoDeletado =  await produtoRepository.deletar(id);
    } catch(err) {
        throw {id: 500, message:err.message }
    }
    
    if(produtoDeletado) {
        return produtoDeletado;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}