const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

body.addEventListener("mouseover", (e) => {
    body.style.background = "gray";
});

body.addEventListener("mouseout", (e) => {
    body.style.background = "unset";
});

tooltip.addEventListener("mouseover", (e)=> {
    console.log("Altura da Página", body.clientHeight);
    console.log("Largura da Página", body.clientWidth);
    console.log("Altura do Tooltip", tooltip.clientHeight);
    console.log("largura do tooltip", tooltip.clientWidth);
    console.log("Altura do Mouse", e.clientY);
    console.log("Largura do Mouse", e.clientX);

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = 
    "ACelerre dá berre bezebezubede"; 

        const largura = 200;
  newDiv.style.position = "fixed";
  newDiv.style.width = largura + "px";
  newDiv.style.top = e.clientY + "px";
  newDiv.style.display = "flex";
  newDiv.style.left =
    (e.clientX + largura > body.clientWidth
      ? e.clientX - largura - 20
      : e.clientX + largura) + "px";

  console.log(newDiv.style.width, "width");

  header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout",(e)=> {
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
})