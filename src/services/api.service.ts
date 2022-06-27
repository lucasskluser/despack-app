import axios from "axios";

export class APIService {
  private readonly baseUrl = "https://despack.herokuapp.com";

  async login(email: string, senha: string) {
    const response = await axios.post(`${this.baseUrl}/autenticacao/login`, {
      email,
      senha,
    });
    return response.data;
  }

  async getCollectPoints(token: string) {
    const response = await axios.get(
      `${this.baseUrl}/pontoColeta`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  }
}
