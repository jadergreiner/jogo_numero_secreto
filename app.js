let listaNumerosSorteados = [];
let numeroLimite = 10;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite abaixo um número entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Digite abaixo um número entre 1 e ${numeroLimite}`);

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

console.log(numeroSecreto);

let chute = document.querySelector('input');

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', `Acertou com ${tentativas} ${palavratentativa}!`);
        exibirTextoNaTela('p', 'Parabens! Agora reinicie o jogo');
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (chute > 10 || chute < 1){
            exibirTextoNaTela('p', 'Apenas números entre 1 e 10');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
        }

    }
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = []
    } 
    if (listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else{
        // adiciona o numeroSorteado a listaNumerosSorteados
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    window.location.reload();
}
