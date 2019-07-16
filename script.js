//criando lista com todas as 4 divs que criamos no html
let quadradinhos = document.querySelectorAll(".cards div");

//criando vetor para guardarmos os nomes das classes 
let posicaoCores = [];

//percorrendo a lista das divs 
//e comparando se há uma classe ou não 
//e inserindo o nome da classe no indice do vetor de acordo com a posição da classe na lista de divs
for (let index = 0; index < quadradinhos.length; index++) {
    if (quadradinhos[index].classList.contains("vermelho")) {
        posicaoCores.push("vermelho");
    } else {
        posicaoCores.push("azul");
    }   
}

//imprimindo no console o vetor para verificar se o passo anterior funcionou corretamente
console.log(posicaoCores);

//definindo o tempo de 3seg para que as cores apareçam para o user e depois as cartas se tornem pretas
setTimeout(function corBg(){
    for (let qd of quadradinhos) {
    qd.classList.remove("vermelho");
    qd.classList.remove("azul");
    qd.classList.add("black");
}}, 3000);

//FALTA - definir a função para clique
//para comparar
function mudarCor(event){
    if(event.target.style)
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}