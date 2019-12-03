import apiService, { ApiService } from './api';

export class UserService {
  constructor(private apiService: ApiService) {
    this.apiService = apiService;
  }

  public async list(id: number): Promise<{ email: string }[]> {
    const data = await this.apiService.get(`https://randomuser.me/api/?${id}`);

    return data.results;
  }
}

const userService = new UserService(apiService);
export default userService;
