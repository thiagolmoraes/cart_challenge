// Lista de Produtos cadastrados no sistema
const getProdutos = () => {
    return [
        {id:1, nome:'Combo Batata Frita com Frango', preco:48 },
        {id:2, nome:'Alcatra na manteiga e chimichurri', preco:11 },
        {id:3, nome:'Big Chicken', preco:6.50 },
        {id:4, nome:'Churrasquinho de coração', preco: 6 },
        {id:5, nome:'Agua c/ gás', preco:2.8 },
        {id:6, nome:'Coca-cola 200ml', preco:4 },
        {id:7, nome:'X-Tudo', preco:11 },
    ]
}

//Lista de emails cadastradas no sistema
const getEmails = () => {
    return [
        {id:1, email: 'shayna69@hotmail.com'},
        {id:2, email: 'pacocha.dianna@beier.com'},
        {id:3, email: 'balistreri.ashleigh@yahoo.com'},
        {id:4, email: 'ystreich@gmail.com'},
        {id:5, email: 'wnicolas@cruickshank.com'},
        {id:6, email: 'ezequiel.mohr@schaden.com'},
        {id:7, email: 'wrussel@gmail.com'},
        {id:8, email: 'jakubowski.richard@yahoo.com'},
        {id:9, email: 'berge.noemie@lubowitz.com'},
        {id:10, email: 'derek92@gmail.com'}
    ]
}



module.exports = {getProdutos}