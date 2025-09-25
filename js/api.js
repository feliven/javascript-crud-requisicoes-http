const URLBASE = "http://localhost:3000";

const api = {
  async getListaPensamentos() {
    try {
      const response = await fetch(`${URLBASE}/pensamentos`);
      return await response.json();
    } catch (error) {
      alert("ERRO NA API");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch(`${URLBASE}/pensamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch (error) {
      alert("ERRO AO SALVAR NOVO PENSAMENTO");
      throw error;
    }
  },

  async getPensamentoPorID(id) {
    try {
      const response = await fetch(`${URLBASE}/pensamentos/${id}`);
      return await response.json();
    } catch (error) {
      alert("ERRO AO BUSCAR PENSAMENTO");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${URLBASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch (error) {
      alert("ERRO AO EDITAR PENSAMENTO");
      throw error;
    }
  },

  async apagarPensamento(id) {
    try {
      await fetch(`${URLBASE}/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert("ERRO AO APAGAR PENSAMENTO");
      throw error;
    }
  },
};

export default api;
