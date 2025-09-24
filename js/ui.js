import api from "./api.js";

const interfaceUsuario = {
  async exibirPensamentos() {
    const ulListaPensamentos = document.getElementById("lista-pensamentos");

    try {
      const arrayPensamentos = await api.buscarPensamentos();
      arrayPensamentos.forEach((pensamento) => {
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
      });
    } catch (error) {
      alert("ERRO NA UI");
    }
  },
};

export default interfaceUsuario;
