import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import {
  createData,
  updateData,
  updatePincodeData,
  validateData,
} from "./utils/organisationTypes";

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

  validate: async (unique_name: string, data: validateData) => {
    try {
      return await api.post(
        apiEndpoints.validateOrganisation(unique_name),
        data
      );
    } catch (error) {
      throw error;
    }
  },

  update: async (unique_name: string, data: updateData) => {
    try {
      return await api.put(apiEndpoints.updateOrganisation(unique_name), data);
    } catch (error) {
      throw error;
    }
  },

  updatePincode: async (unique_name: string, data: updatePincodeData) => {
    try {
      return await api.put(
        apiEndpoints.updateOrganisationPincode(unique_name),
        data
      );
    } catch (error) {
      throw error;
    }
  },
};

export default organisationService;
