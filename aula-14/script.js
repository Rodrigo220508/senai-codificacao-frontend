//o metodo getElementById busca no html o elemento que possui o id correspondente.
const titulo = document.getElementById("cardTitulo");
const descricao = document.getElementById("cardDescricao");
const botao = document.getElementById("btnSaida");

//Exibe os elementos selecionados no console do navegador (F12).
console.log("Elemento do título: ", titulo);
console.log("Elemento do botão: ", botao);


console.log("Texto atual do titulo:", titulo.innertext);



botao.addEventListener("click",function() {
    titulo.innerText = "JavaScript no Dom: ";

    descricao.innerText = "Você clicou no botão e o texto foi alterado usando document.getElementById() com sucesso!";

    titulo.style.color = "#4f46e5"
    botao.style.backgroundColor = "#10b981";
    botao.innerText = "Texto Atualizado!"

})