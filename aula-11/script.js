const produto1 = {
    nome: "camiseta",
    preco: 50,
    categoria: "roupas",
    estoque: 10
};

const produto2 = {
    nome: "Tênis",
    preco: 200.00,
    categoria: "sapatos",
    estoque: 5
};



const produto3 = {
    nome: "Boné",
    preco: 30,
    categoria: "Acessírios",
    estoque: 15
};

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

const resultado = calcularDesconto(produto1.preco, 10);
console.log(resultado)

function exibirProduto(produto) {
    console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco}, Estoque: ${produto.estoque}`);
}

exibirProduto(produto1);

let emPromocao = true;

if (emPromocao) {
    console.log("O produto está em promoção!");
} else {
    console.log("O produto não está em promoção.");
}

const produtos = [produto1, produto2, produto3];
for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1}. ${produtos[i].nome}`);
}
