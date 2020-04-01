import axios, { Method, AxiosResponse } from 'axios';

export class ApiService {
  public async get<T = any>(url: string, params?: any): Promise<T> {
    const response = await this.request<T>('GET', url, params);
    return response.data;
  }

  public async post<T = any>(url: string, body: any): Promise<T> {
    const response = await this.request<T>('POST', url, body);
    return response.data;
  }

  private async request<T>(method: Method, url: string, data: T = null): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.request<T>({
        baseURL: process.env.REACT_APP_API_URL,
        url,
        method,
        timeout: 30000,
        headers: {
          'Content-type': 'application/json'
        },
        params: method === 'GET' ? data : null,
        data: method === 'POST' ? data : null
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const apiService = new ApiService();
export default apiService;
