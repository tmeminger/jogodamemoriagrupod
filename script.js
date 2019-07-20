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


setTimeout(function corBg(){
    //definindo o tempo de 3seg para que as cores apareçam para o user e depois as cartas se tornem pretas
    for (let qd of quadradinhos) {
    qd.classList.remove("vermelho");
    qd.classList.remove("azul");
    qd.classList.add("black");
}}, 3000);

//FALTA - definir a função para clique
//para comparar
function mudarCor(event){
    if(event.target.style){}
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}