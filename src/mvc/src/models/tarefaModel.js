const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    dataCriacao: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Tarefa", tarefaSchema);