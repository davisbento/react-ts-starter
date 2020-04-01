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
}

const userService = new UserService(apiService);
export default userService;
