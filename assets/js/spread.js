const areasNacionais = ['Azul', 'Gol', 'Latam']

const airCompanies = [
    ...areasNacionais,
    'Delta','United Airlines', 'Emirates', 'Qatar', 'Tap'
];

console.log(airCompanies);

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(delta,"verificando a variável Delta");
console.log(internacionais, "verificando a variável internacionais");

const user = {
    name: "Gustavo Luvian",
    email: "glmp@gmail.com",
    password:"333221"
};

const {password, ...data} = user;

console.log(data, "retornando dados da API");
