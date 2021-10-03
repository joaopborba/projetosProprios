const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Seja bem vindo");
})

app.get("/sobre", (req,res)=>{
    res.send("Sobre nós");
})

app.get("/contato", (req,res)=>{
    res.send({nome:"João Pedro", idade: 25, profissao: "Developer"});
})

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})