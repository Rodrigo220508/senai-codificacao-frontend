const produtos = [
    { id: 1, nome: "Notebook Dell", preco: 4500.00, categoria: "Eletrônicos", imagem: "notebook.jpg" },
    { id: 2, nome: "Mouse Sem Fio", preco: 120.00, categoria: "Acessórios", imagem: "mouse.jpg" },
    { id: 3, nome: "Teclado Mecânico", preco: 350.00, categoria: "Acessórios", imagem: "teclado.jpg" },
    { id: 4, nome: "Monitor 24 Pol", preco: 850.00, categoria: "Eletrônicos", imagem: "monitor.jpg" },
    { id: 5, nome: "Cadeira Gamer", preco: 1200.00, categoria: "Móveis", imagem: "cadeira.jpg" }
];


function listarProdutos() {
    for (const produto of produtos) {
        const { nome, preco, categoria, imagem } = produto;

        console.log(nome, preco, categoria, imagem);
    }
}

listarProdutos();

console.log("\n");


function filtrarProdutos(categoria) {
    const resultado = [];

    for (const produto of produtos) {
        if (produto.categoria === categoria) {
            resultado.push(produto);
        }
    }

    return resultado;
}

console.log(filtrarProdutos("Eletrônicos"));


console.log("\n");


const copiaProdutos = [...produtos];

const novosProdutos = [
    ...produtos,
    { id: 6, nome: "Fone", preco: 200, categoria: "Acessórios", imagem: "fone.jpg" }
];

console.log(copiaProdutos);


console.log("\n");


console.log(novosProdutos);