let ListaDeNumerosSorteados = [];
let numLimite = 10;
let NumSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo da Adivinhação');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(NumSecreto);
    if(chute == NumSecreto){
        exibirTextoNaTela('h1','Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa   }.`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > NumSecreto){
            exibirTextoNaTela('p','O número secreto é MENOR!');
        }else{
            exibirTextoNaTela('p','O número secreto é MAIOR!');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numLimite){
        ListaDeNumerosSorteados = [];
    }

    if(ListaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        ListaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}   

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    NumSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}