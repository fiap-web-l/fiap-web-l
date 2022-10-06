
console.log(nome, "Chamando variável criada com var");

const nome = "Fiap";

escreve("Exemplo de função nominal");

function escreve (titulo) {
    alert(titulo);
}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Vai Corinthians");

const mudaTitulo2 = function (novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};

mudaTitulo2("Trocando o subtítulo");

const relogio = ()=>{
    const date = new Date();
    mudaTitulo2(date.toLocaleDateString());
}

setInterval(relogio, 1000);