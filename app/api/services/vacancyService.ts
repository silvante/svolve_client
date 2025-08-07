import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { createVacancyData, updateVacancyData } from "./utils/vacancyTypes";

const vacancyService = {
  create: async (data: createVacancyData) => {
    try {
      return await api.post(apiEndpoints.createVacancy, data);
    } catch (error) {
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      return await api.get(apiEndpoints.getVacancyById(id));
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      return await api.get(apiEndpoints.getAllMyVacancies);
    } catch (error) {
      throw error;
    }
  },

  update: async (id: number, data: updateVacancyData) => {
    try {
      return await api.put(apiEndpoints.updateVacancy(id), data);
    } catch (error) {
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      return await api.delete(apiEndpoints.deleteVacancy(id));
    } catch (error) {
      throw error;
    }
  },
};

export default vacancyService;
