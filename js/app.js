const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// Ao clicar em Exercicios em JS abri uma janela do repositório dos exercicios
function abrirJanela() {
  window.open(
    "https://github.com/jeffmmartins/Exercicios-LogicadaProgramacao-com-JavaScript"
  );
}






