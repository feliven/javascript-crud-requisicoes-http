import interfaceUsuario from "./ui.js";
import api from "./api.js";

const botaoCancelar = document.getElementById("botao-cancelar");

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("pensamento-form");

  formulario.addEventListener("submit", manipularFormulario);

  interfaceUsuario.exibirPensamentos();
});

botaoCancelar.addEventListener("click", () => {
  const novoConteudoPensamento = document.getElementById("pensamento-conteudo");
  const novaAutoriaPensamento = document.getElementById("pensamento-autoria");
  novoConteudoPensamento.value = "";
  novaAutoriaPensamento.value = "";
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
