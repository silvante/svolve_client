import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { CreateClientType } from "./utils/clientTypes";

const clientService = {
  getTodaysClients: async (org_id: number) => {
    try {
      return await api.get(apiEndpoints.getTodaysClients(org_id));
    } catch (error) {
      throw error;
    }
  },

  createClient: async (org_id: number, data: CreateClientType) => {
    try {
      return await api.post(apiEndpoints.createClient(org_id), data);
    } catch (error) {
      throw error;
    }
  },
};
