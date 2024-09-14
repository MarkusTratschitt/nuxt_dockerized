import CryptoJS from 'crypto-js';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(newToken: string) {
      const encryptedToken = CryptoJS.AES.encrypt(newToken, 'secret-key').toString();
      this.token = encryptedToken;
    },
    getToken() {
      const decryptedToken = CryptoJS.AES.decrypt(this.token, 'secret-key').toString(CryptoJS.enc.Utf8);
      return decryptedToken;
    },
    clearToken() {
      this.token = null;
    },
  },
});
