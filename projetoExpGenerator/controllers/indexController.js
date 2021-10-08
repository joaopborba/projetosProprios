const indexController = {
    viewContatos: (req, res)=>{
        let {nome, idade} = req.query;
        res.render('contatos', {nomeUsuario:nome});
    },
    confirmarContato: (req, res)=>{
        let {nome, email} = req.query;
        res.send("Recebido as informações do " + nome);
    }
}

module.exports = indexController;