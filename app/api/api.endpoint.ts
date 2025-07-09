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
};

export default apiEndpoints;
