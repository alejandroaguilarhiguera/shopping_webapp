import { User } from 'types';
import { GetAPI, PutAPI } from 'utils/requests';
import { API_USERS } from 'config/index';

export class UserService {
  // eslint-disable-next-line
  constructor() {}
  getAll(): Promise<User[]> {
    return GetAPI(API_USERS);
  }
  show(id: string): Promise<User> {
    return GetAPI(`${API_USERS}/${id}`);
  }
  async edit(id: User['id'], attributes: Partial<User>): Promise<User> {
    const data = await PutAPI(`${API_USERS}/${id}`, {
      email: attributes.email,
      username: attributes.username,
    });
    return data;
  }
  me(): Promise<User> {
    return GetAPI(`${API_USERS}/me`);
  }
}

export default UserService;
