import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { CreateTypeData } from "./utils/typeTypes";

const typeService = {
  getTypes: async (org_id: number) => {
    try {
      return await api.get(apiEndpoints.getOrgTypes(org_id));
    } catch (error) {
      throw error;
    }
  },

  createType: async (org_id: number, data: CreateTypeData) => {
    try {
      return await api.post(apiEndpoints.createOrgType(org_id), data);
    } catch (error) {
      throw error;
    }
  },

  updateType: async (org_id: number, type_id: number, data: CreateTypeData) => {
    try {
      return await api.put(apiEndpoints.updateOrgType(org_id, type_id), data);
    } catch (error) {
      throw error;
    }
  },

  deleteType: async (org_id: number, type_id: number) => {
    try {
      return await api.delete(apiEndpoints.deleteOrgType(org_id, type_id));
    } catch (error) {
      throw error;
    }
  },
};

export default typeService;
