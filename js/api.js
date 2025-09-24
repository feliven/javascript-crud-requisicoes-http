const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch (error) {
      alert("ERRO NA API");
      throw error;
    }
  },
};

export default api;
