const form = document.querySelector("#form-newsletter");


const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", function (event) { 
 console.log("Formulário enviado!"); 
});


form.addEventListener("submit", function (event) { 
 event.preventDefault(); 
 console.log("Formulário enviado, sem recarregar!"); 
});


form.addEventListener("submit", function (event) { 
 event.preventDefault(); 
 const nome = document.querySelector("#nome").value; 
 const email = document.querySelector("#email").value; 
 console.log(nome, email); 
});


