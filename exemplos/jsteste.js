const personagem = document.getElementById("personagem");

let posicao = 0;
let direcao = 0;
let velocidade = 10;

function teclapressionada(event) {
    if (event.key === "d" || event.key === "D") {
        direcao = 1;
    } else if (event.key === "a" || event.key === "A") {
        direcao = -1;
    }
}

function teclasolta(event) {
    if (event.key === "d" || event.key === "D") {
        direcao = 0;
    } else if (event.key === "a" || event.key === "A") {
        direcao = 0;
    }
}

function teclaSolta(event) {
    if (event.key === "d" || event.key === "D" || event.key === "a" || event.key === "A") {
        direcao = 0;
    }
}

function atualizarmovimento(){
    posicao += direcao * velocidade;
    personagem.style.left = posicao + "px";
}

document.addEventListener("keydown".teclapressionada);
document.addEventListener("keyup".teclasolta);
setInterval(atualizarmovimento, 50);

// const personagem = document.getElementById("personagem");

// let posicao = 0;
// let direcao = 0;
// let velocidade = 10;

// document.addEventListener("keydown", function (event) {
//      alert("tecla pressionada é " + " " + event.key); // alerta de como pegar o botao que esta precioando.
//     if(event.key === "b") {
//         direcao = +1;
//         posicao += direcao * velocidade; //0 + 1 x 10 = 10 calculo de movimentação.
//         personagem.style.left = posicao + "px";  // personagem.style.left = "10px" ;
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.key === "d" || event.key === "D") {
//         // Verifica se a tecla pressionada é "d" ou "D" (minúscula ou maiúscula)
//         posicao += velocidade; // Aumenta a posição atual pela velocidade
//         personagem.style.left = posicao + "px"; // Atualiza a posição do personagem
//     }
//     else if (event.key === "a" || event.key === "A") {
//         // Verifica se a tecla pressionada é "d" ou "D" (minúscula ou maiúscula)
//         posicao -= velocidade; // Aumenta a posição atual pela velocidade
//         personagem.style.left = posicao + "px"; // Atualiza a posição do personagem
//     }
// });
