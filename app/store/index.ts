import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import OrganisationSlice from "./slices/organisationSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    organisations: OrganisationSlice,
  },
});

export default store;
