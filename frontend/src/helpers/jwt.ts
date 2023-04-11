import { decodeToken, isExpired } from 'react-jwt';
import { SecureStorage, STORAGE, CRYPTO } from '@jihyunlab/web-secure-storage';

const storage = SecureStorage(STORAGE.SESSION, CRYPTO.AES, process.env.REACT_APP_SECRET_KEY || '');

export interface JWTInfo {
  email: string;
  name: string;
  role: string;
}

export const getToken = (): string | null => {
  return storage.getItem('token');
};

export const setToken = (token: string) => {
  storage.setItem('token', token);
};

export const removeToken = () => {
  storage.removeItem('token');
};

export const decode = (token: string | null): JWTInfo | null => {
  if (!token || token.length === 0 || isExpired(token)) {
    return null;
  }

  const info = decodeToken<JWTInfo>(token);

  if (!info) {
    return null;
  }

  return info;
};
