
const carrosDOM = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "VW", "Honda", "Toyota", "Hyundai"]

veiculos.push("BMW");

veiculos.unshift("Audi");

const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

const posicao = 2;
const removido = veiculos.splice(posicao, 1);

const removidos = veiculos.splice(1, 2);

const removidos2 = veiculos.splice(1,2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key)=> {
    carrosDOM.innerHTML += `<option value="${key}">${value}
    </option>`;
});

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3,5));
console.log(newNba, "último");

const name = "Gustavo Luvian";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const CelticsMap = nbaTeams.map(procuraCeltic);
const CelticsFilter = nbaTeams.filter(procuraCeltic);
const CelticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsSearch, "Find");
