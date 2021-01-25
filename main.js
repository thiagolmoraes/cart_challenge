const modules = require('./mock.js')

/*
          Criar um carrinho de Compras com os seguintes produtos e emails
                shayna69, pacocha, wnicolas => Combo Batata Frita, Agua c/ gás, 3x X-Tudo
*/

//Gerando o Carrinho de Produtos
const cProdutos = () => {
    // Indices  dos produtos que foram consumidos.
    let produtos = [1,5,7,7,7];
    
    let carrinho = [];
    let contador = 0;

    produtos.forEach((el) => {
        modules.getProdutos().forEach(prod => {
            if(prod.id===el){
                carrinho.push({nome:prod.nome, preco: prod.preco})
            }
        })
    });

    

    return carrinho
}

//Gerando a Lista de pessoas que vão dividir os produtos
const cEmails = (emails) => {

}

//Receber carrinho de compras e  dividir entre as emails(pessoas)
const metodo = function(l_produtos){
   const carrinho = l_produtos()
   return carrinho
}

console.log(metodo(cProdutos))