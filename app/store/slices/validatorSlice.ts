import { Organisation } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organisationsState {
  validation: Boolean;
  loading: Boolean;
}

const initialState: organisationsState = {
  validation: false,
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
  },
});

export const { updateValidation, setLoading } = ValidatorSlice.actions;
export default ValidatorSlice.reducer;
