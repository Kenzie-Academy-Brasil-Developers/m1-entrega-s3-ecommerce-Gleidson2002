let body = document.querySelector("body")
let pagina = "todos"
const arraycarrinho = [];
const teste = document.getElementById("todos")
teste.classList.add("teste")
let arraytrajes = itens.filter(x => x.categoria === "Trajes")
let armas = itens.filter(x => x.categoria === "Armamento")
let capacetes = itens.filter(x => x.categoria === "Capacete")
let com = itens.filter(x => x.categoria === "Comunicação")
trajes.addEventListener("click", () => {
    cardsparaexibir(arraytrajes), catexibindo(trajes)
})
todos.addEventListener("click", () => {
    cardsparaexibir(itens), catexibindo(botodos)
})
Armas.addEventListener("click", () => {
    cardsparaexibir(armas), catexibindo(boarmas)
})
cap.addEventListener("click", () => {
    cardsparaexibir(capacetes), catexibindo(cap)
})
comunicacao.addEventListener("click", () => {
    cardsparaexibir(com), catexibindo(comunicacao)
})

trajes.addEventListener("click", () => {
    pagina = "trajes"
})
todos.addEventListener("click", () => {
    pagina = "todos"
})
Armas.addEventListener("click", () => {
    pagina = "armas"
})
cap.addEventListener("click", () => {
    pagina = "cap"
})
comunicacao.addEventListener("click", () => {
    pagina = "com"
})
let bpesquisar = document.getElementById("bpesquisa")
let inputp = document.querySelector("#inputp")
let botodos = document.getElementById("todos")
let bocomunicacao = document.getElementById("comunicacao")
let botrajes = document.getElementById("trajes")
let bocap = document.getElementById("cap")
let boarmas = document.getElementById("Armas")

let botoes = [botodos, bocomunicacao, bocap, botrajes, boarmas]
bpesquisar.addEventListener("click", function () {
    pesquisa = inputp.value

    cardsparaexibir(pesquisar(pesquisa))
    inputp.value = ""
})
let content = document.getElementById("content")
verificarvazio()

direita.addEventListener("click", function (event) {
    let result = event.target.id
    let count = 1
    for (let i = 0; i<arraycarrinho.length; i++){
        
      if(arraycarrinho[i].id+"c"===result&&count===1){
          arraycarrinho.splice(i,1)
        count = 0
        } 
          
           
          
    }
    divcarrinho.innerHTML = ""
    for (let i = 0; i<arraycarrinho.length;i++){
        itenscarrinho(arraycarrinho[i])
    }
    return
})
let botaodiv = document.getElementById("botaodiv")
content.addEventListener("click", function (event) {
    let result = event.target.id
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].id === result) {
            arraycarrinho.push(itens[i])
            itenscarrinho(itens[i])
        }
    }
    let ptotal = document.getElementById("ptotal")
    ptotal.innerHTML= `${totalcarrinho(arraycarrinho)}TY`
    let quanp  = document.getElementById("quanp")
    quanp.innerHTML = `${arraycarrinho.length}`

    vazioo.innerHTML = ""
    infocarrinho.style.display = ""
    verificarvazio()
    return
})

function pesquisar(texto) {

    let result = [];
    for (let i = 0; i < itens.length; i++) {

        if ((itens[i].nome).toLowerCase().includes(texto)) {
            result.push(itens[i])
        }
        if ((itens[i].descricao).toLowerCase().includes(texto)) {
            result.push(itens[i])
        }
    }
    return result

}

function catexibindo(botao) {
    botao.classList.add("Atual")
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].classList.contains("Atual")) {
            botoes[i].classList.remove("Atual")

        }
    }
    botao.classList.add("Atual")
    return

}

function cardsparaexibir(array) {
    esquerda.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        esquerda.appendChild(criadordecards(array[i]))
    }
    return
}
function criadordecards(objeto) {
    let produto = document.createElement("div")
    produto.classList.add("produto")
    

    produto.innerHTML = `<div class="produtoicone" id = ><img id="picone" src="${objeto.imagem}" alt=""></div>
   <p class = classeicone id >${objeto.categoria}</p>
   <p class = nome >${objeto.nome}</p>
   <p class= descricao >${objeto.descricao}</p>
   <p class = preco >${objeto.valor}.00 TY </p>
   <button class = "cadd"  id="${objeto.id}"  >Adicionar ao carrinho</button>
   `

    return produto
}
function itenscarrinho(objeto) {
    
    let carrinho = document.createElement("div");
    carrinho.classList.add("carrinho");
    
    carrinho.innerHTML = `<div class = "carrinhocontent">
    <div class="carrinhoicone"><img id="cicone" src="${objeto.imagem}" alt=""></div>
    
    <div class = "infos">
    <p class = nome>${objeto.nome}</p>
    <p class = preco>${objeto.valor}TY </p>
    </div>
    <button class=excluircarrinho id="${objeto.id}c">Exluir</button>
    `
    let divcarrinho = document.getElementById("divcarrinho")

    
        divcarrinho.appendChild(carrinho)
    
    

}
function verificarvazio() {
    let vazioo = document.getElementById("vazioo")

    let cvazio = document.createElement("div")
    if (arraycarrinho.length === 0) {
        cvazio.innerHTML = `<div class = "vaziovazio"><p id = cv>Carrinho vazio</p><footer id= "adicione">Adicione itens</footer> </div>`
        vazioo.appendChild(cvazio)
        infocarrinho.style.display ="none"
       
    }
    return
}
function totalcarrinho(array) {
    let Total = 0
    for (let i = 0; i < array.length; i++) {
        Total += array[i].valor
    }
    return Total

}


cardsparaexibir(itens)

catexibindo(botodos)