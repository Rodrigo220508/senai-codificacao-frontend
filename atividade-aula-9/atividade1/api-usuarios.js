const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// 1. Credenciais expostas diretamente no código
mongoose.connect(
    'mongodb://admin:senai2026@cluster-loja.mongodb.net:27017/lojaDB'
);

// 2. Schema sem validação adequada
const Usuario = mongoose.model('Usuario', new mongoose.Schema({
    nome: String,
    email: String,
    cpf: String,
    senha: String
}));

// 3. Senha armazenada em texto puro
app.post('/usuarios', async (req, res) => {
    const usuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        senha: req.body.senha
    });

    res.json(usuario);
});

// 4. Consulta sem proteção adequada
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find(req.query);

    res.json(usuarios);
});

// 5. Exclusão sem filtro
app.delete('/usuarios', async (req, res) => {
    await Usuario.deleteMany({});

    res.json({ mensagem: 'Usuários excluídos' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});