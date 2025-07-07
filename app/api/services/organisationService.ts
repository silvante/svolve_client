import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { createData } from "./utils/organisationTypes";

const organisationService = {
  getAll: async () => {
    try {
      await api.post(apiEndpoints.getUsersOrganisations);
    } catch (error) {
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      await api.get(apiEndpoints.getOrganisationById(id));
    } catch (error) {
      throw error;
    }
  },

  create: async (data: createData) => {
    try {
      await api.post(apiEndpoints.createOrganisation, data);
    } catch (error) {
      throw error;
    }
  },
};
