import axios, { Method, AxiosResponse } from 'axios';

export class ApiService {
  public async get(url: string, params?: any): Promise<any> {
    const response = await this.request('GET', url, params);
    return response.data.results;
  }

  private async request(method: Method, url: string, data: any = null): Promise<AxiosResponse> {
    try {
      const response = await axios.request({
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
