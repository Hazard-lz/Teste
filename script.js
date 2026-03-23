const botao = document.getElementById("botaoExemplo");
const resultado = document.getElementById("resultado");
let contador = 0;

botao.addEventListener("click", () => {
  contador += 1;
  resultado.textContent = `Botão clicado ${contador} vez${contador === 1 ? "" : "es"}.`;
  document.body.style.backgroundColor = contador % 2 === 0 ? "#f1f8ff" : "#ffeef0";
});
