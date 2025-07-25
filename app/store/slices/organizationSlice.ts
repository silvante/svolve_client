import { Organization } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organizationsState {
  organizations: Organization[] | null;
  loading: Boolean;
}

const initialState: organizationsState = {
  organizations: null,
  loading: true,
};

const OrganizationSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateOrganizations: (state, action: PayloadAction<Organization[]>) => {
      state.organizations = action.payload;
      state.loading = false;
    },

    pushOrganization: (state, action: PayloadAction<Organization>) => {
      if (state.organizations) {
        state.organizations.push(action.payload);
      } else {
        state.organizations = [action.payload];
      }
      state.loading = false;
    },

    clearOrganizations: (state) => {
      state.organizations = null;
    },

    replaceOrganization: (state, action: PayloadAction<Organization>) => {
      if (state.organizations) {
        const index = state.organizations.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.organizations[index] = action.payload;
        }
      }
    },
  },
});

export const {
  updateOrganizations,
  clearOrganizations,
  setLoading,
  pushOrganization,
  replaceOrganization,
} = OrganizationSlice.actions;
export default OrganizationSlice.reducer;
