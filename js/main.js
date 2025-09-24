import interfaceUsuario from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const botaoSalvar = document.getElementById("botao-salvar");
  const botaoCancelar = document.getElementById("botao-cancelar");
  const formulario = document.getElementById("pensamento-form");

  formulario.addEventListener("submit", manipularFormulario);

  interfaceUsuario.exibirPensamentos();
});

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
