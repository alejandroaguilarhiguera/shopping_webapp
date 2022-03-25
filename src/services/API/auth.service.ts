import { Session, NewUser, ResponseVerificationPhone } from 'types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  API_AUTH_LOGIN,
  API_AUTH_SIGN_UP,
  API_AUTH_RECOVERY_PASSWORD,
  API_AUTH_RENEW_PASSWORD,
  API_AUTH_LOGIN_PROVIDER_CODE,
  API_AUTH_CONFIRM_EMAIL,
  API_AUTH_SEND_CODE_PHONE,
  API_AUTH_CONFIRM_PHONE,
  SESSION_LOCAL_STORAGE,
} from 'config/index';
import { GetAPI, PostAPI } from 'utils/requests';


export class AuthService {
  // eslint-disable-next-line
  constructor() {}
  async login(email: string, password: string): Promise<Session> {
    const data = await PostAPI(API_AUTH_LOGIN, { identifier: email, password });
    if (data?.jwt) {
      const session = JSON.stringify({
        ...data,
        token: data.jwt,
      }); 
      await AsyncStorage.setItem(SESSION_LOCAL_STORAGE, session);
      return JSON.parse(session);
    }
    return data;
  }
  async signUp(user: NewUser): Promise<Session | ResponseVerificationPhone> {
    const data = await PostAPI(API_AUTH_SIGN_UP, user);
    if (data?.token) {
      await AsyncStorage.setItem(SESSION_LOCAL_STORAGE, JSON.stringify(data));
    }
    return data;
  }
  recoveryPassword(email: string): Promise<{ message: string }> {
    return PostAPI(API_AUTH_RECOVERY_PASSWORD.replace(':email', email));
  }
  renewPassword(hash: string, password: string): Promise<Session> {
    return PostAPI(API_AUTH_RENEW_PASSWORD, { hash, password });
  }
  confirmEmail(hash: string): Promise<Session> {
    return PostAPI(API_AUTH_CONFIRM_EMAIL, { hash });
  }
  sendCodePhone(
    phoneNumber: string,
    captcha: string,
  ): Promise<ResponseVerificationPhone> {
    return PostAPI(API_AUTH_SEND_CODE_PHONE.replace(':phoneNumber', phoneNumber), { captcha });
  }
  async confirmPhone(verificationId:string, code: string): Promise<Session> {
    const data = await PostAPI(API_AUTH_CONFIRM_PHONE, { verificationId, code });
    if (data?.token) {
      await AsyncStorage.setItem(SESSION_LOCAL_STORAGE, JSON.stringify(data));
    }
    return data;
  }
  async oauth(provider: string, code: string): Promise<Session> {
    const data = await GetAPI(API_AUTH_LOGIN_PROVIDER_CODE.replace(':provider', provider).replace(':code', code));
    if (data?.token) {
      await AsyncStorage.setItem(SESSION_LOCAL_STORAGE, JSON.stringify(data));
    }
    return data;
  }
  logout(): Promise<void> {
    return AsyncStorage.setItem(SESSION_LOCAL_STORAGE, '{}');
  }
  async getSession(): Promise<Session> {
    const session = await AsyncStorage.getItem(SESSION_LOCAL_STORAGE);
    // TODO: Request API users/me session.user.id
    return JSON.parse(session || '{}');
  }
}

export default AuthService;
