import { Organisation } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organisationsState {
  validation: Boolean;
  unique_name: string | null;
  loading: Boolean;
}

const initialState: organisationsState = {
  validation: false,
  unique_name: null,
  loading: true,
};

const ValidatorSlice = createSlice({
  name: "organisations",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateValidation: (state, action: PayloadAction<Boolean>) => {
      state.validation = action.payload;
      state.loading = false;
    },

    updateUniqueName: (state, action: PayloadAction<string | null>) => {
      state.unique_name = action.payload;
      state.loading = false;
    },

    clearValidation: (state) => {
      state.validation = false;
      state.unique_name = null;
      state.loading = true;
    },
  },
});

export const {
  updateValidation,
  setLoading,
  updateUniqueName,
  clearValidation,
} = ValidatorSlice.actions;
export default ValidatorSlice.reducer;
