let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =  texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', 
{rate:1.2});

} 

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++
        limparCampo()
    }
    
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 a 10');

}

exibirMensagemInicial()


function gerarNumeroAleatorio(){
    //parseInt converte qualquer propriedade para inteiro
    let numeroEscolhido =parseInt(Math.random()* numeroLimite+ 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}

