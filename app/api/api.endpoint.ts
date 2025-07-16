const apiEndpoints = {
  home: "/",

  // auth
  signup: "/auth/signup",
  signin: "/auth/signin",
  profile: "/auth/profile",
  resetToken: (token: string) => `/auth/reset/?token=${token}`,
  verify_magic_link: (token: string) =>
    `/auth/verify-magic-link/?token=${token}`,
  google: "/auth/google",
  github: "/auth/github",

  // organisations
  getUsersOrganisations: "/organisations",
  getOrganisationById: (id: number) => `/organisations/${id}`,
  createOrganisation: "/organisations/new",
  validateOrganisation: (unique_name: string) =>
    `/organisations/${unique_name}/validate`,

  // types
  getOrgTypes: (org_id: number) => `/organisations/${org_id}/types`,
  createOrgType: (org_id: number) => `/organisations/${org_id}/types/new`,

  // clients
  getTodaysClients: (org_id: number) =>
    `/organisations/${org_id}/clients/today`,
  createClient: (org_id: number) => `/organisations/${org_id}/clients/new`,
  checkClient: (org_id: number, client_id: number) =>
    `/organisations/${org_id}/clients/check/${client_id}`,
};

export default apiEndpoints;
