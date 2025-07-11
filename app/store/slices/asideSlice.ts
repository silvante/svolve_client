import { Organisation } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface organisationsState {
  is_active: Boolean;
}

const initialState: organisationsState = {
  is_active: true,
};

const AsideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    togleAside: (state) => {
      state.is_active = !state.is_active;
    },
  },
});

export const { togleAside } = AsideSlice.actions;
export default AsideSlice.reducer;
