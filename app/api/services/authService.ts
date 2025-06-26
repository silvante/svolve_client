import User from "@/app/types/User";
import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { LoginData, RegisterData } from "./utils/authTypes";

const authService = {
  login: async (data: LoginData) => {
    try {
      return await api.post(apiEndpoints.signin, data);
    } catch (error) {
      throw error;
    }
  },

  signup: async (data: RegisterData) => {
    try {
      return await api.post(apiEndpoints.signup, data);
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (token: string) => {
    try {
      return await api.get(apiEndpoints.verify_magic_link(token));
    } catch (error) {
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const user: User = await api.get(apiEndpoints.profile);
      return user;
    } catch (error) {
      throw error;
    }
  },

  resetToken: async (reset_token: string) => {
    try {
      return await api.get(apiEndpoints.resetToken(reset_token));
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
