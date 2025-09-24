import api from "./api.js";

const interfaceUsuario = {
  async exibirPensamentos() {
    try {
      const arrayPensamentos = await api.buscarPensamentos();
      arrayPensamentos.forEach(interfaceUsuario.adicionarPensamentoNaLista);
    } catch (error) {
      alert("ERRO NA UI");
    }
  },

  adicionarPensamentoNaLista(pensamento) {
    const ulListaPensamentos = document.getElementById("lista-pensamentos");

    const liPensamento = document.createElement("li");
    liPensamento.classList.add("li-pensamento");
    liPensamento.setAttribute("data-id", pensamento.id);

    const imagemPensamento = `<img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">`;

    const divConteudoPensamento = document.createElement("div");
    divConteudoPensamento.classList.add("pensamento-conteudo");
    divConteudoPensamento.innerText = pensamento.conteudo;

    const divAutoriaPensamento = document.createElement("div");
    divAutoriaPensamento.classList.add("pensamento-autoria");
    divAutoriaPensamento.innerText = pensamento.autoria;

    liPensamento.innerHTML += imagemPensamento;
    liPensamento.appendChild(divConteudoPensamento);
    liPensamento.appendChild(divAutoriaPensamento);
    ulListaPensamentos.appendChild(liPensamento);
    console.log(liPensamento);
  },

  limparFormulario() {
    const formulario = document.getElementById("pensamento-form");
    formulario.reset();
  },
};

export default interfaceUsuario;
