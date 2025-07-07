import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { createData } from "./utils/organisationTypes";

const organisationService = {
  getAll: async () => {
    try {
      return await api.get(apiEndpoints.getUsersOrganisations);
    } catch (error) {
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      return await api.get(apiEndpoints.getOrganisationById(id));
    } catch (error) {
      throw error;
    }
  },

  create: async (data: createData) => {
    try {
      return await api.post(apiEndpoints.createOrganisation, data);
    } catch (error) {
      throw error;
    }
  },
};

export default organisationService;
