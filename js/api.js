const URLBASE = "http://localhost:3000";

const api = {
  async getListaPensamentos() {
    try {
      const response = await axios.get(`${URLBASE}/pensamentos`);
      return await response.data;
    } catch (error) {
      alert("ERRO NA API");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URLBASE}/pensamentos`, pensamento);
      return await response.data;
    } catch (error) {
      alert("ERRO AO SALVAR NOVO PENSAMENTO");
      throw error;
    }
  },

  async getPensamentoPorID(id) {
    try {
      const response = await axios.get(`${URLBASE}/pensamentos/${id}`);
      return await response.data;
    } catch (error) {
      alert("ERRO AO BUSCAR PENSAMENTO");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URLBASE}/pensamentos/${pensamento.id}`, pensamento);
      return await response.data;
    } catch (error) {
      alert("ERRO AO EDITAR PENSAMENTO");
      throw error;
    }
  },

  async apagarPensamento(id) {
    try {
      await axios.delete(`${URLBASE}/pensamentos/${id}`);
    } catch (error) {
      alert("ERRO AO APAGAR PENSAMENTO");
      throw error;
    }
  },
};

export default api;
