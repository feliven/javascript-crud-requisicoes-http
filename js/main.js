import interfaceUsuario from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("pensamento-form");
  const botaoCancelar = document.getElementById("botao-cancelar");

  formulario.addEventListener("submit", manipularFormulario);
  botaoCancelar.addEventListener("click", limparFormulario);

  interfaceUsuario.exibirPensamentos();
});

function limparFormulario() {
  interfaceUsuario.limparFormulario();
}

async function manipularFormulario(evento) {
  evento.preventDefault();
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;
  const id = document.getElementById("pensamento-id").value;

  try {
    await api.salvarPensamento({ conteudo, autoria });
    interfaceUsuario.exibirPensamentos();
  } catch (error) {
    alert("erro ao SALVAR");
  }
}
