const mongoose = require('mongoose');

// A conexão deve vir de uma variável de ambiente
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error('Erro:', err));

// SCHEMA COM BOAS PRÁTICAS
const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
        minlength: [2, 'Mínimo 2 caracteres'],
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Email inválido']
    },

    cpf: {
        type: String,
        required: true,
        select: false
    },

    senha: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

console.log('Schema seguro criado.');