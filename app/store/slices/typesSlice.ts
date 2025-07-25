import { Organization, Type } from "@/app/types/User";
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

    replaceType: (state, action: PayloadAction<Type>) => {
      if (state.types) {
        const index = state.types.findIndex((c) => c.id === action.payload.id);
        if (index !== -1 && index !== undefined) {
          state.types[index] = action.payload;
        }
      }
    },

    deleteType: (state, action: PayloadAction<Type>) => {
      if (state.types) {
        const index = state.types.findIndex((c) => c.id === action.payload.id);
        if (index !== -1 && index !== undefined) {
          state.types.splice(index, 1);
        }
      }
    },

    clearTypes: (state) => {
      state.types = null;
    },
  },
});

export const {
  updateTypes,
  clearTypes,
  setLoading,
  pushType,
  replaceType,
  deleteType,
} = TypesSlice.actions;
export default TypesSlice.reducer;
