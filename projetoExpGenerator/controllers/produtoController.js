const produtoController = {
    viewForm: (req, res)=>{
        return res.render('produtos');
    },
    salvarForm: (req, res)=>{
        let { nomeProduto, precoProduto } = req.body;
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res)=>{
        res.render('sucesso');
    },
    viewAttForm: (req, res)=>{
        let {id} = req.params;
        let produtos = [
            {id:1, nome: "Produto X", preco:10},
            {id:2, nome: "Produto Y", preco:20}
        ]
        res.render('editarProduto', {produto:produtos[id]});
    },
    editar: (req, res)=>{
        let { nomeProduto, precoProduto } = req.body;
        res.send('Você editou o ' + nomeProduto);
    },
    listarProdutos: (req, res)=>{
        let produtos = [
            {id:1, nome: "Produto X", preco:10},
            {id:2, nome: "Produto Y", preco:20}
        ]
        res.render('listaProdutos', {listaProdutos:produtos});
    },
    deletarProduto: (req, res)=>{
        let {id} = req.params;

        res.send("Deletando o produto com id: " + id);
    }
}

module.exports = produtoController;