import api from "../api.config";
import apiEndpoints from "../api.endpoint";

const uploadService = {
  uploadLogo: async (formData: any) => {
    try {
      return await api.post(apiEndpoints.uploadLogo, formData);
    } catch (error) {
      throw error;
    }
  },

  uploadAvatar: async (formData: any) => {
    try {
      return await api.post(apiEndpoints.uploadAvatar, formData);
    } catch (error) {
      throw error;
    }
  },

  uploadBanner: async (formData: any) => {
    try {
      return await api.post(apiEndpoints.uploadBanner, formData);
    } catch (error) {
      throw error;
    }
  },
};
