import { Moment } from 'moment';

export interface User {
    id: number;
    email: string;
    username: string;
    provider: boolean;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string | Date | Moment;
    updatedAt: string | Date | Moment;
}



export interface ResponseVerificationPhone {
  verificationId: string;
  message: string;
}

export interface NewUser {
  email?: User['email'];
  password?: string;
  username?: string;
  captcha?: string;
}

export default User;
