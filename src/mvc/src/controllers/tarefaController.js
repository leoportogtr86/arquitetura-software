const Tarefa = require("../models/tarefaModel");

exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.find();
        res.render("index", {tarefas});
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.adicionarTarefa = async (req, res) => {
    const {titulo, descricao} = req.body;
    const novaTarefa = new Tarefa({titulo, descricao});
    try {
        await novaTarefa.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error);
    }
}