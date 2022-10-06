
const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc1.showArguments("Vai Corinthians","Full-Stack Developer", "React","NodeJS","Typescript");

let myFunc2 = {
    showArguments: () => {
        resultado.innerHTML = arguments;
        console.log(...arguments);
    },
};

myFunc2.showArguments("Vai Corinthians","Full-Stack Developer", "React","NodeJS","Typescript");
