const personagem = document.getElementById("personagem");

let posicao = 0;
let direcao = 0;
let velocidade = 20;

function teclaPressionada(event) {
    if (event.key === "d" || event.key === "D") {
        direcao = 1;
    } else if (event.key === "a" || event.key === "A") {
        direcao = -1;
    }
}

function teclaSolta(event) {
    if (event.key === "d" || event.key === "D" || event.key === "a" || event.key === "A") {
        direcao = 0;
    }
}

function atualizarMovimento() {
    posicao += direcao * velocidade;
    personagem.style.left = posicao + "px";
}

document.addEventListener("keydown", teclaPressionada); // Correção na passagem de função
document.addEventListener("keyup", teclaSolta); // Correção na passagem de função
setInterval(atualizarMovimento, 50);
