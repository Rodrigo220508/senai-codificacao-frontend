```jsx
const catalogoOriginal = [{ id: 1, nome: "Teclado", preco: 200 }];

const catalogoPromocional = catalogoOriginal;
catalogoPromocional[0].preco = 150;

console.log(catalogoOriginal[0].preco);
```

**Trecho 5 — Spread vs. referência**

```jsx
const produto = { nome: "Mouse", valor: 80 };

const { nome, preco } = produto;

console.log(`Preço: ${preco}`);
```

**Trecho 4 — Destructuring**

```jsx
const dadosAPI = `{
  'nome': "Caderno",
  "preco": 25,
}`;

const produto = JSON.parse(dadosAPI);
```

**Trecho 3 — JSON**

```jsx
const produtos = [
  { id: 1, nome: "Mochila", preco: 150 },
  { id: 2, nome: "Garrafa", preco: 40 }
];

console.log(produtos[2].nome);
```

**Trecho 2 — Array de objetos**

```jsx
```

**Trecho 1 — Objeto**

const produto = {
  nome: "Fone de Ouvido",
  preco: 120
};

console.log(produto.Nome);