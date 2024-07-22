const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const tarefasRoutes = require("./routes/tarefaRoutes");

mongoose.connect('mongodb://localhost:27017/tarefas');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); // Configure o diretório de visões

app.use("/", tarefasRoutes);

app.listen(8080, (err) => {
    if (err) {
        throw err;
    }
    console.log("Servidor online!");
})