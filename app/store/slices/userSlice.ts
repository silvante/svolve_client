import User from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },

    crearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { updateUser, crearUser } = userSlice.actions;
export default userSlice.reducer;
