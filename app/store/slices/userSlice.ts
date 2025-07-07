import User from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: User | null;
  loading: Boolean;
}

const initialState: UserState = {
  currentUser: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.loading = false;
    },

    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
