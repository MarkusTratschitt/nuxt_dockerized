import CryptoJS from 'crypto-js';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null, // Update the type to allow null
  }),
  actions: {
    setToken(newToken: string) {
      const encryptedToken = CryptoJS.AES.encrypt(newToken, 'secret-key').toString();
      this.token = encryptedToken;
    },
    getToken() {
    if (this.token === null) {
        // Handle the case where token is null, e.g., return null or throw an error
        return null;
    }
    const decryptedToken = CryptoJS.AES.decrypt(this.token, 'secret-key').toString(CryptoJS.enc.Utf8);
    return decryptedToken;
    },
    clearToken() {
      this.token = null;
    },
  },
});