import { createSlice } from "@reduxjs/toolkit";

interface organizationsState {
  is_active: Boolean;
}

const initialState: organizationsState = {
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
