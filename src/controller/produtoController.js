const database = require('../connection/databaseConnection');

function listar() {
    let dados = []; 

    //simulando que estamos buscando dados em um banco de dados
    for (let i = 1; i <= 10; i++) {
        dados.push({
            id: i,
            nome: 'Produto '+i,
            valor: 100.01*3,
            categoria: 'Informática',
        });
    }

    return dados;
}

function cadastrar() {
    return "Cadastrando produto...";
}

async function cadastrar({nome, valor, categoria}) { 
    let sql = `INSERT INTO tb_produto (nome, valor, categoria) 
                VALUES ('${nome}', '${valor}', '${categoria}')`;

    await database.executar(sql);

    return {nome, valor, categoria};
}

async function editar({nome, valor, categoria}, id) {
    let sql = `UPDATE tb_produto SET nome='${nome}', valor='${valor}', categoria='${categoria}' WHERE id=${id}`;

    await database.executar(sql);
}

async function excluir(id) {
    let sql = "DELETE FROM tb_produto WHERE id="+id;

    await database.executar(sql);
}

async function buscarUm(id) {
    let sql = "SELECT * FROM tb_produto WHERE id="+id;

    let resultado = await database.executar(sql);

    return resultado[0];
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
    buscarUm,
};

