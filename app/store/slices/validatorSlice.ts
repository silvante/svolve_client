import { Organization } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValidatorSlice {
  validation: Boolean;
  organization: Organization | null;
  loading: Boolean;
}

const initialState: ValidatorSlice = {
  validation: false,
  organization: null,
  loading: true,
};

const ValidatorSlice = createSlice({
  name: "validator",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateValidation: (state, action: PayloadAction<Boolean>) => {
      state.validation = action.payload;
      // state.loading = false;
    },

    updateValidationOrg: (state, action: PayloadAction<Organization>) => {
      state.organization = action.payload;
      state.loading = false;
    },

    clearValidation: (state) => {
      state.validation = false;
      state.organization = null;
      state.loading = true;
    },
  },
});

export const {
  updateValidation,
  setLoading,
  updateValidationOrg,
  clearValidation,
} = ValidatorSlice.actions;
export default ValidatorSlice.reducer;
