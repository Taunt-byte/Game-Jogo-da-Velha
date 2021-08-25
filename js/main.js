var jogador = null;
var jogadorSelecionado = document.getElementById(elementId = 'Jogador-selecionado');
var vencedorSelecionado = document.getElementById(elementId = 'vencedor-selecionado');
var quadrados = document.getElementsByClassName(className = 'quadrado');

mudarjogador(valor = 'X');

function escolher(id){
    var quadrado = document.getElementById(id);
if (quadrado.innerHTML !== '-'){
    return;
}

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    mudarjogador(jogador);
    checaVencedor();
}


function mudarjogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(elementId= 1);
    var quadrado2 = document.getElementById(elementId= 2);
    var quadrado3 = document.getElementById(elementId= 3);
    var quadrado4 = document.getElementById(elementId= 4);
    var quadrado5 = document.getElementById(elementId= 5);
    var quadrado6 = document.getElementById(elementId= 6);
    var quadrado7 = document.getElementById(elementId= 7);
    var quadrado8 = document.getElementById(elementId= 8);
    var quadrado9 = document.getElementById(elementId= 9);

    if(checaSequencia(quadrado1, quadrado2 , quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2 , quadrado3);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5 , quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5 , quadrado6);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8 , quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8 , quadrado9);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4 , quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4 , quadrado7);
        mudaVencedor(quadrado4);
        return;
    }
}

function mudaVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.color = '#0f0';
    quadrado2.style.color = '#0f0';
    quadrado3.style.color = '#0f0';
}

function checaSequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;

    }
    return eigual;
}