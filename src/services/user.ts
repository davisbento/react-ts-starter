import apiService, { ApiService } from './api';

export class UserService {
  constructor(private apiService: ApiService) {
    this.apiService = apiService;
  }

  public async list(id: number): Promise<{ name: string }[]> {
    return this.apiService.get(`https://randomuser.me/api/?${id}`);
  }
}

const userService = new UserService(apiService);
export default userService;
