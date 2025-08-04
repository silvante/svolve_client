import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { createVacancyData } from "./utils/vacancyTypes";

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
};

export default vacancyService;
