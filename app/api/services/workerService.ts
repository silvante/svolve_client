import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { HireWorkerData } from "./utils/workerTypes";

const workerService = {
  hire: async (org_id: number, vacancy_id: number, data: HireWorkerData) => {
    try {
      return await api.post(apiEndpoints.hireWorker(org_id, vacancy_id), data);
    } catch (error) {
      throw error;
    }
  },

  getById: async (org_id: number, id: number) => {
    try {
      return await api.get(apiEndpoints.getWorkerById(org_id, id));
    } catch (error) {
      throw error;
    }
  },

  getAll: async (org_id: number) => {
    try {
      return await api.get(apiEndpoints.getAllWorkers(org_id));
    } catch (error) {
      throw error;
    }
  },

  delete: async (org_id: number, id: number) => {
    try {
      return await api.delete(apiEndpoints.deleteWorker(org_id, id));
    } catch (error) {
      throw error;
    }
  },
};

export default workerService;
