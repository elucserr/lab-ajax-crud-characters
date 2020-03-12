class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters`)
  }

  getOneRegister (characterId) {
    return axios.get(`http://localhost:8000/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
    return axios.post(`http://localhost:8000/characters`, characterInfo);
  }

  updateOneRegister (characterId,characterInfo) {
    return axios.put(`http://localhost:8000/characters/${characterId}`,characterInfo)
  }

  deleteOneRegister (characterId) {
    return axios.delete(`http://localhost:8000/characters/${characterId}`)
  }
};