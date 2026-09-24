// ==============================
// PRODUTOS DA LOJA
// ==============================

const produtos = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 39.90
    },

    {
        id: 2,
        nome: "Caneca",
        preco: 25.00
    },

    {
        id: 3,
        nome: "Mochila",
        preco: 120.00
    },

    {
        id: 4,
        nome: "Fone de Ouvido",
        preco: 90.00
    }
];


// ==============================
// CARRINHO
// ==============================

let carrinho = [];


// ==============================
// ELEMENTOS DO HTML
// ==============================

const listaProdutos = document.getElementById("lista-produtos");

const areaCarrinho = document.getElementById("area-carrinho");

const elementoTotal = document.getElementById("total");

const botaoFinalizar = document.getElementById("finalizar");


// ==============================
// MOSTRAR OS PRODUTOS
// ==============================

function mostrarProdutos() {

    listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {

        const card = document.createElement("div");

        card.classList.add("card-produto");

        card.innerHTML = `
            <h3>${produto.nome}</h3>

            <p>
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button data-id="${produto.id}">
                Adicionar ao carrinho
            </button>
        `;

        listaProdutos.appendChild(card);

    });
}


// ==============================
// ADICIONAR AO CARRINHO
// ==============================

function adicionarAoCarrinho(id) {

    const produto = produtos.find((produto) => produto.id === id);

    if (!produto) {
        return;
    }

    const itemExistente = carrinho.find((item) => item.id === id);

    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });

    }

    salvarCarrinho();

    renderizarCarrinho();
}


// ==============================
// MOSTRAR O CARRINHO
// ==============================

function renderizarCarrinho() {

    areaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        areaCarrinho.innerHTML = `
            <p>Seu carrinho está vazio.</p>
        `;

        calcularTotal();

        return;
    }


    carrinho.forEach((item) => {

        const linha = document.createElement("div");

        linha.classList.add("item-carrinho");

        linha.innerHTML = `
            <span>
                ${item.nome} 
                (x${item.quantidade})
            </span>

            <span>
                R$ ${(item.preco * item.quantidade).toFixed(2)}
            </span>

            <button data-id="${item.id}">
                Remover
            </button>
        `;

        areaCarrinho.appendChild(linha);

    });

    calcularTotal();
}


// ==============================
// REMOVER DO CARRINHO
// ==============================

function removerDoCarrinho(id) {

    carrinho = carrinho.filter((item) => item.id !== id);

    salvarCarrinho();

    renderizarCarrinho();
}


// ==============================
// CALCULAR TOTAL
// ==============================

function calcularTotal() {

    const total = carrinho.reduce((soma, item) => {

        return soma + item.preco * item.quantidade;

    }, 0);

    elementoTotal.textContent =
        `Total: R$ ${total.toFixed(2)}`;
}


// ==============================
// SALVAR NO LOCALSTORAGE
// ==============================

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}


// ==============================
// CARREGAR DO LOCALSTORAGE
// ==============================

function carregarCarrinho() {

    const dados = localStorage.getItem("carrinho");

    carrinho = dados ? JSON.parse(dados) : [];
}


// ==============================
// EVENTO DOS BOTÕES DE PRODUTO
// ==============================

listaProdutos.addEventListener("click", (evento) => {

    if (evento.target.tagName === "BUTTON") {

        const id = Number(evento.target.dataset.id);

        adicionarAoCarrinho(id);
    }

});


// ==============================
// EVENTO DOS BOTÕES REMOVER
// ==============================

areaCarrinho.addEventListener("click", (evento) => {

    if (evento.target.tagName === "BUTTON") {

        const id = Number(evento.target.dataset.id);

        removerDoCarrinho(id);
    }

});


// ==============================
// FINALIZAR COMPRA
// ==============================

botaoFinalizar.addEventListener("click", () => {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }

    alert("Compra realizada com sucesso!");

    carrinho = [];

    salvarCarrinho();

    renderizarCarrinho();

});


// ==============================
// INICIAR A LOJA
// ==============================

carregarCarrinho();

mostrarProdutos();

renderizarCarrinho();