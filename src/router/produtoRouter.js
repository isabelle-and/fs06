const app = require('express').Router();
const produtoController = require('../controller/produtoController');

app.get('/produtos', async (req, res) => {
    let dados = await produtoController.listar();

    res.send(dados);
});

app.get('/produtos/:id', async (req, res) => {
    let dados = await produtoController.buscarUm(req.params.id);

    res.send(dados);
});

app.get('/produtos/:id', async (req, res) => {
    res.send('testando...');
});

module.exports = app;