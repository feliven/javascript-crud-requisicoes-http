import api from "./api.js";

const interfaceUsuario = {
  async exibirFormularioEPensamentos() {
    try {
      const containerFormulario = document.getElementById("form-container");
      const arrayPensamentos = await api.getListaPensamentos();

      if (arrayPensamentos.length === 0 || !arrayPensamentos.length) {
        // se lista estiver vazia...
        const containerAdicionarPensamentos = document.getElementById("adicionar-pensamentos");
        const botaoAdicionarPensamentos = document.getElementById("botao-adicionar-pensamentos");

        // exibir área com botão grande "Adicionar pensamentos"
        containerAdicionarPensamentos.style.display = "flex";

        // fazer formulário aparecer ao clicar no botão "Adicionar pensamentos"
        botaoAdicionarPensamentos.addEventListener("click", () => {
          containerFormulario.style.display = "flex";
          containerAdicionarPensamentos.style.display = "none";
        });
      } else {
        // se lista tiver elementos...
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const elementoListaVazia = document.getElementById("lista-vazia");

        // mostrar área de formulário
        containerFormulario.style.display = "flex";

        // esconde elemento de lista vazia
        elementoListaVazia.style.display = "none";

        // e exibir a lista de pensamentos
        listaPensamentos.style.display = "flex";
        arrayPensamentos.forEach(interfaceUsuario.adicionarPensamentoNaLista);
      }
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
    botaoApagar.onclick = () => api.apagarPensamento(pensamento.id);
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
