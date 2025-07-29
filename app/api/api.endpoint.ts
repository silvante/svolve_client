const apiEndpoints = {
  home: "/",

  // auth
  signup: "/auth/signup",
  signin: "/auth/signin",
  profile: "/auth/profile",
  resetToken: (token: string) => `/auth/reset/?token=${token}`,
  verify_magic_link: (token: string) => `/auth/verify-magic-link/?token=${token}`,
  google: "/auth/google",
  github: "/auth/github",

  // organizations
  getUsersOrganizations: "/organizations",
  getOrganizationById: (id: number) => `/organizations/${id}`,
  createOrganization: "/organizations/new",
  validateOrganization: (unique_name: string) => `/organizations/${unique_name}/validate`,
  updateOrganization: (unique_name: string) => `/organizations/${unique_name}/update`,
  updateOrganizationPincode: (unique_name: string) => `/organizations/${unique_name}/update/pincode`,

  // types
  getOrgTypes: (org_id: number) => `/organizations/${org_id}/types`,
  createOrgType: (org_id: number) => `/organizations/${org_id}/types/new`,
  updateOrgType: (org_id: number, type_id: number) => `organizations/${org_id}/types/${type_id}/update`,
  deleteOrgType: (org_id: number, type_id: number) => `organizations/${org_id}/types/${type_id}/delete`,

  // clients
  getTodaysClients: (org_id: number) => `/organizations/${org_id}/clients/today`,
  createClient: (org_id: number) => `/organizations/${org_id}/clients/new`,
  checkClient: (org_id: number, client_id: number) => `/organizations/${org_id}/clients/${client_id}/check`,
  updateClient: (org_id: number, client_id: number) => `/organizations/${org_id}/clients/${client_id}/update`,
  deleteClient: (org_id: number, client_id: number) => `/organizations/${org_id}/clients/${client_id}/delete`,

  // uploads
  uploadAvatar: "/uploads/avatar",
  uploadBanner: "/uploads/banner",
  uploadLogo: "/uploads/logo",

  // users
  updateUser: "/user/update",
  getUserById: (id: number) => `/user/${id}`
};

export default apiEndpoints;
