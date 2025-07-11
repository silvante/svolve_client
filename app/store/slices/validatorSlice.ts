import { Organisation } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organisationsState {
  validation: Boolean;
  organisation: Organisation | null;
  loading: Boolean;
}

const initialState: organisationsState = {
  validation: false,
  organisation: null,
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
      state.loading = false;
    },

    updateValidationOrg: (state, action: PayloadAction<Organisation>) => {
      state.organisation = action.payload;
      state.loading = false;
    },

    clearValidation: (state) => {
      state.validation = false;
      state.organisation = null;
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
