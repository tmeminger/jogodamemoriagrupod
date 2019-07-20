//criando lista com todas as 4 divs que criamos no html
let quadradinhos = document.querySelectorAll('img');


// Puxar posição e localização das imgs e armarzenar em um vetor
function pegarCartas(quadradinhos){
    //criando vetor para guardarmos os nomes das imgs
    let cartas = [];
    for (i = 0; i<quadradinhos.length;i++){
        cartas[i] = quadradinhos[i].src;
    }
    // retorna um vetor com os nomes das imgs
    return cartas;
}
// armazendo os nomes da imgs e suas posições em uma variavel
cartas = pegarCartas(quadradinhos);

//imprimindo no console o vetor para verificar se o passo anterior funcionou corretamente
console.log(cartas);

// Pega um vetor e embaralha as posições dele
function embaralhar(lista){
    let valor;
    let indice_aleatorio;
    for (let i = lista.length - 1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
        valor = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor;
    }
    // manda essa lista embaralhada para a função mandarCartas
    mandarCartas(lista);
}

// Atualizando no html a posições das imgs de acordo com o vetor
function mandarCartas(lista){
    for (i = 0; i<lista.length;i++){
        document.querySelectorAll('img')[i].src = lista[i];
    }
}

// manda embaralhar e mandar pro html o vetor cartas
embaralhar(cartas);


setTimeout(function corBg(){
    //definindo o tempo de 3seg para que as cores apareçam para o user e depois as cartas se tornem pretas
    for (let qd of quadradinhos) {
    qd.src = ''
}}, 3000);

//FALTA - definir a função para clique
//para comparar
function mudarCor(event){
    if(event.target.style){}
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}