const apiEndpoints = {
  home: "/",

  // auth
  signup: "/auth/signup",
  signin: "/auth/signin",
  profile: "/auth/profile",
  verify_magic_link: (token: string) =>
    `/auth/verify-magic-link/?token=${token}`,
  google: "/auth/google",
  github: "/auth/github",

  // organisations
};

export default apiEndpoints;
