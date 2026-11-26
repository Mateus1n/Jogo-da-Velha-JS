

const celulas = document.querySelectorAll(".celula");

const mensagemStatus = document.querySelector("#status");

const botaoReiniciar = document.querySelector("#reiniciar")

let jogadorAtual = "X";

let jogoAtivo = true

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];

let tabuleiro = ["", "", "", "", "", "", "", "", ""];

function fazerJogada(event) {

    const celula = event.target;

    if (jogoAtivo === false) {
        return;
    }

    if(celula.textContent !== "") {
        return;
    }

    const indice = Array.from(celulas).indexOf(celula);

    celula.textContent = jogadorAtual;

    tabuleiro[indice] = jogadorAtual;


    if(jogadorAtual === "X") {
        celula.classList.add("jogador-x");
    } else {
        celula.classList.add("jogador-o");
    }


    if (verificarVencedor()) {
        jogoAtivo = false
        mensagemStatus.textContent = "Jogador " + jogadorAtual + " venceu!";
        return;
    }


    if(!tabuleiro.includes("")) {
        jogoAtivo = false;
        mensagemStatus.textContent = "EMPATE!";
        return;

    }

    if (jogadorAtual === "X") {

        jogadorAtual = "O";

    } else {

        jogadorAtual = "X";

    }

    mensagemStatus.textContent = "Vez do Jogador" + jogadorAtual;

}

celulas.forEach(function(celula) {

    celula.addEventListener("click", fazerJogada);

});

function verificarVencedor () {

    for (let combinacao of combinacoesVitoria) {

        const [a, b, c] = combinacao;

        if (
            tabuleiro[a] !== "" &&
            tabuleiro[a] === tabuleiro[b] &&
            tabuleiro[a] === tabuleiro[c]
        ) {
            return true;
        }
    }

    return false;
}

botaoReiniciar.addEventListener("click", function() {
   
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    
    jogadorAtual = "X";
    
    jogoAtivo = true;

    celulas.forEach(function(celula) {
        celula.textContent = "";
        celula.classList.remove("jogador-x", "jogador-o");
});

mensagemStatus.textContent = "Vez do jogador X";

});
