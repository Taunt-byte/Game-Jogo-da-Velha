var jogador = null;
var jogadorSelecionado = document.getElementById(elementId = 'Jogador-selecionado');

mudarjogador(valor = 'X');

function escolher(id){
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
}  

function mudarjogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}