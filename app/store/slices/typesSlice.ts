import { Organisation, Type } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypesSlice {
  types: Type[] | null;
  loading: Boolean;
}

const initialState: TypesSlice = {
  types: null,
  loading: true,
};

const TypesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateTypes: (state, action: PayloadAction<Type[]>) => {
      state.types = action.payload;
      state.loading = false;
    },

    pushType: (state, action: PayloadAction<Type>) => {
      if (state.types) {
        state.types.push(action.payload);
      } else {
        state.types = [action.payload];
      }
      state.loading = false;
    },

    clearTypes: (state) => {
      state.types = null;
    },
  },
});

export const { updateTypes, clearTypes, setLoading, pushType } =
  TypesSlice.actions;
export default TypesSlice.reducer;
