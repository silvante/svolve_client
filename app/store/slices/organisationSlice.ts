import { Organisation } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organisationsState {
  organisations: Organisation[] | null;
  loading: Boolean;
}

const initialState: organisationsState = {
  organisations: null,
  loading: true,
};

const OrganisationSlice = createSlice({
  name: "organisations",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateOrganisations: (state, action: PayloadAction<Organisation[]>) => {
      state.organisations = action.payload;
      state.loading = false;
    },

    clearUser: (state) => {
      state.organisations = null;
    },
  },
});

export const { updateOrganisations, clearUser, setLoading } = OrganisationSlice.actions;
export default OrganisationSlice.reducer;
