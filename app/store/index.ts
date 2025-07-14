import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import OrganisationSlice from "./slices/organisationSlice";
import ValidatorSlice from "./slices/validatorSlice";
import AsideSlice from "./slices/asideSlice";
import TypesSlice from "./slices/typesSlice";
import ClientSlice from "./slices/clientSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    organisations: OrganisationSlice,
    validator: ValidatorSlice,
    aside: AsideSlice,
    types: TypesSlice,
    client: ClientSlice,
  },
});

export default store;
