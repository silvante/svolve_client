import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import OrganizationSlice from "./slices/organizationSlice";
import ValidatorSlice from "./slices/validatorSlice";
import AsideSlice from "./slices/asideSlice";
import TypesSlice from "./slices/typesSlice";
import ClientSlice from "./slices/clientSlice";
import vacancySlice from "./slices/vacancySlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    organizations: OrganizationSlice,
    validator: ValidatorSlice,
    aside: AsideSlice,
    types: TypesSlice,
    client: ClientSlice,
    vacancy: vacancySlice,
  },
});

export default store;
