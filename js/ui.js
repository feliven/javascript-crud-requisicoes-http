import api from "./api.js";

const interfaceUsuario = {
  async exibirPensamentos() {
    try {
      const arrayPensamentos = await api.getListaPensamentos();
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

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "/assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar pensamento";

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.onclick = () => interfaceUsuario.preencherFormularioComPensamentoSalvo(pensamento.id);
    botaoEditar.appendChild(iconeEditar);

    const iconeApagar = document.createElement("img");
    iconeApagar.src = "/assets/imagens/icone-excluir.png";
    iconeApagar.alt = "Apagar pensamento";

    const botaoApagar = document.createElement("button");
    botaoApagar.classList.add("botao-apagar");
    botaoApagar.appendChild(iconeApagar);

    const botoesPensamento = document.createElement("div");
    botoesPensamento.classList.add("icones");
    botoesPensamento.appendChild(botaoEditar);
    botoesPensamento.appendChild(botaoApagar);

    liPensamento.innerHTML += imagemPensamento;
    liPensamento.appendChild(divConteudoPensamento);
    liPensamento.appendChild(divAutoriaPensamento);
    liPensamento.appendChild(botoesPensamento);
    ulListaPensamentos.appendChild(liPensamento);
    console.log(liPensamento);
  },

  limparFormulario() {
    const formulario = document.getElementById("pensamento-form");
    formulario.reset();
  },

  async preencherFormularioComPensamentoSalvo(idPensamentoSalvo) {
    const pensamento = await api.getPensamentoPorID(idPensamentoSalvo);
    const idNovoPensamento = document.getElementById("pensamento-id");
    const campoNovoConteudo = document.getElementById("pensamento-conteudo");
    const campoNovaAutoria = document.getElementById("pensamento-autoria");

    idNovoPensamento.value = pensamento.id;
    campoNovoConteudo.value = pensamento.conteudo;
    campoNovaAutoria.value = pensamento.autoria;
  },
};

export default interfaceUsuario;
