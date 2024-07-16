const categoriaRepository = require('../repository/categoria_repository_bd')

async function listar() {
    try{ 
        return await categoriaRepository.listar();
    }
    catch (err) {
        throw {id: 500, message:err.message }
    }
}

async function inserir(categoria) {
    if(categoria && categoria.nome) {// categoria != undefined
        try{ 
            return await categoriaRepository.inserir(categoria);
        }
        catch (err) {
            throw {id: 500, message:err.message }
        }
    }
    else {
        throw {id:400, message:"Categoria nao possui nome"};
    }
}

async function buscarPorId(id) {
    let categoria;
    try{ 
        categoria = await categoriaRepository.buscarPorId(id);
    }
    catch(err) {
        throw {id: 500, message:err.message }
    }

    if(categoria) {
        return categoria;
    }
    else {
        throw {id:404, message:"Categoria nao encontrada"};
    }

}

async function atualizar(id, categoria) { 
    if(categoria && categoria.nome) {// categoria != undefined
        let categoriaAtualizada;     
        try {  
            categoriaAtualizada =  await categoriaRepository.atualizar(id,categoria);  
        } catch(err) {
            throw {id: 500, message:err.message }
        }
        
        if(categoriaAtualizada) {
            return categoriaAtualizada;
        }
        else {
            throw {id:404, message:"Categoria nao encontrada"};
        }    
    }
    else {
        throw {id:400, message:"Categoria nao possui nome"};
    }

}

async function deletar(id) {
    //Faltou validar se categoria está relacionada com produto
    //Retornar 400 se existir relacao com algum produto.
    let categoriaDeletada;     
    try {  
        categoriaDeletada =  await categoriaRepository.deletar(id);
    } catch(err) {
        throw {id: 500, message:err.message }
    }
    
    if(categoriaDeletada) {
        return categoriaDeletada;
    }
    else {
        throw {id:404, message:"Categoria nao encontrada"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}