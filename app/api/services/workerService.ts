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
};

export default workerService;
