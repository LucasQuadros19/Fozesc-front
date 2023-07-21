import axios, { AxiosInstance } from "axios";
import { LimiteModel } from "@/model/LimiteModel";

class LimiteClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8081/api/limite',
      headers: { 'Content-type': 'application/json' }
    });
  }


  public async findById(id: number): Promise<LimiteModel> {
    try {
      return (await this.axiosClient.get<LimiteModel>(`/lista/id/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listaAll(): Promise<any> {
    try {
      return (await this.axiosClient.get<LimiteModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastro: LimiteModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(`/cadastrar`, cadastro)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, editar: LimiteModel): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/delete/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new LimiteClient();
