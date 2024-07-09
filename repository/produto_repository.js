let idGerador = 2;

let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80
    },
    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.25
    }
];

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = ++idGerador;
    listaProdutos.push(produto);
    return (produto);
}

function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id === id){
            return produto;
        }
    }
}

function atualizar(id, produtoAlterado) {
    let produto = buscarPorId(id);
    if(produto) {
        produto.nome = produtoAlterado.nome;
        produto.categoria = produtoAlterado.categoria;
        produto.preco = produtoAlterado.preco;        
    }
    return produto;
}

function deletar(id) {
    let produto;
    for(let indice in listaProdutos) {
        if(listaProdutos[indice].id === id) {
            produto = listaProdutos.splice(indice,1)[0];
        }
    }
    return produto;  
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter(
        (produto) => {
            return produto.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome) {
    return listaProdutos.filter(
        (produto) => {
            return produto.nome.toUpperCase().includes(nome.toUpperCase());
        }
    )
}


module.exports = {
    listar, 
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorLikeNome
}
