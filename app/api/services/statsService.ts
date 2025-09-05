import api from "../api.config";
import apiEndpoints from "../api.endpoint";

const statsService = {
  clients: async (org_id: number) => {
    try {
      return await api.get(apiEndpoints.getClientStats(org_id));
    } catch (error) {
      throw error;
    }
  },

  revenue: async (org_id: number) => {
    try {
      return await api.get(apiEndpoints.getRevenueStats(org_id));
    } catch (error) {
      throw error;
    }
  },
};

export default statsService;
