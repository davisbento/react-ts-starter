import apiService, { ApiService } from './api';

interface IApiReturn {
  results: { email: string }[];
}

export class UserService {
  constructor(private apiService: ApiService) {
    this.apiService = apiService;
  }

  public async list(id: number) {
    const data = await this.apiService.get<IApiReturn>(`?${id}`);

    return data.results;
  }

  public async getAll() {
    const data = await this.apiService.get('');

    return data;
  }
}

const userService = new UserService(apiService);
export default userService;
