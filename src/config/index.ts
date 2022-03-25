export const NODE_ENV = process.env.NODE_ENV;
export const API_URL = process.env.REACT_APP_API_URL;
export const SENTRY_DNS = process.env.REACT_APP_SENTRY_DNS;
export const SENTRY_ENABLED = process.env.REACT_APP_SENTRY_ENABLED;
export const APP_NAME = process.env.REACT_APP_NAME;
export const API_PREFIX = process.env.REACT_APP_API_PREFIX;
export const GITLAB_CLIENT_ID = process.env.GITLAB_CLIENT_ID;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
export const BITBUCKET_CLIENT_ID = process.env.BITBUCKET_CLIENT_ID;
export const URL_GITLAB = process.env.URL_GITLAB;
export const URL_GITHUB = process.env.URL_GITHUB;
export const URL_BITBUCKET = process.env.URL_BITBUCKET;
export const WEBAPP_URL = process.env.WEBAPP_URL;
export const INTENTS_CODE_PHONE = process.env.INTENTS_CODE_PHONE;
export const SESSION_LOCAL_STORAGE = '@session';

export const API_AUTH_LOGIN = '/auth/local';
export const API_AUTH_LOGIN_PROVIDER_CODE = '/auth/login/:provider?code=:code';
export const API_AUTH_SIGN_UP = '/auth/sign-up';
export const API_AUTH_RECOVERY_PASSWORD = '/auth/recovery-password/:email';
export const API_AUTH_RENEW_PASSWORD = '/auth/renew-password';
export const API_AUTH_CONFIRM_EMAIL = '/auth/confirm-email';
export const API_AUTH_SEND_CODE_PHONE = '/auth/send-code-phone/:phoneNumber';
export const API_AUTH_CONFIRM_PHONE = '/auth/confirm-phone';
export const API_USERS = '/users';
export const API_PAYMENT_METHODS = '/payment-methods';
export const API_PRODUCTS = '/products?populate=image';
export const API_ORDERS = '/orders';
export const API_SHOW_PAYMENT_METHOD = '/payment-methods/:id';



// TODO: Servidor local de pruebas
export const API_ADD_PAYMENT_METHOD = 'http://localhost:3000/api/payment-methods';
export const API_POKEMONS = 'https://pokeapi.co/api/v2/ability';


export default {
  NODE_ENV,
  API_URL,
  API_PREFIX,
  APP_NAME,
  WEBAPP_URL,
  GITLAB_CLIENT_ID,
  GITHUB_CLIENT_ID,
  BITBUCKET_CLIENT_ID,
  URL_GITLAB,
  URL_GITHUB,
  URL_BITBUCKET,
  INTENTS_CODE_PHONE,
  SESSION_LOCAL_STORAGE,
  API_PAYMENT_METHODS,
  API_SHOW_PAYMENT_METHOD,
  API_ADD_PAYMENT_METHOD,
  API_PRODUCTS,
  SENTRY_DNS,
  SENTRY_ENABLED,
};
