const express = require("express");
const rotasProduto = require("./routes/rotasProduto");
const rotasPerfil = require("./routes/rotasPerfil");
const rotasContato = require("./routes/rotasContato");
const app = express();

app.get("/", (req,res)=>{
    res.send("Seja bem vindo");
})

app.get("/sobre", (req,res)=>{
    res.send("Sobre nós");
})

app.use("/contato", rotasContato);
app.use("/produtos", rotasProduto);
app.use("/perfil", rotasPerfil);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})