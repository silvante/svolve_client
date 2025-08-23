import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { UpdateUserData } from "./utils/userTypes";

const userService = {
  update: async (data: UpdateUserData) => {
    try {
      return await api.put(apiEndpoints.updateUser, data);
    } catch (error) {
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      return await api.get(apiEndpoints.getUserById(id));
    } catch (error) {
      throw error;
    }
  },

  getMyJobs: async () => {
    try {
      return await api.get(apiEndpoints.getMyWorks);
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
