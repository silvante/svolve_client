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

    pushOrganisation: (state, action: PayloadAction<Organisation>) => {
      if (state.organisations) {
        state.organisations.push(action.payload);
      } else {
        state.organisations = [action.payload];
      }
      state.loading = false;
    },

    clearOrganisations: (state) => {
      state.organisations = null;
    },

    replaceOrganisation: (state, action: PayloadAction<Organisation>) => {
      if (state.organisations) {
        const index = state.organisations.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.organisations[index] = action.payload;
        }
      }
    },
  },
});

export const {
  updateOrganisations,
  clearOrganisations,
  setLoading,
  pushOrganisation,
  replaceOrganisation,
} = OrganisationSlice.actions;
export default OrganisationSlice.reducer;
