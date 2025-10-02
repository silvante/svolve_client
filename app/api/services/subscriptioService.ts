import api from "../api.config";
import apiEndpoints from "../api.endpoint";

const subscriptionService = {
  generateCheckout: async (unique_name: string) => {
    try {
      return await api.get(apiEndpoints.generateCheckOut(unique_name));
    } catch (error) {
      throw error;
    }
  },
};

export default subscriptionService;
