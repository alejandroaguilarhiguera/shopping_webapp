import { User } from 'types';

export interface Session {
  token: string;
  // refreshToken: string;
  // firebaseToken: string;
  // accessTokenExpiresIn: string | Date | Moment;
  // refreshTokenExpiresIn: string | Date | Moment;
  user: User;
}

export default Session;
