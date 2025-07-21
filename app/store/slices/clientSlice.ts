import { Client } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientSlice {
  clients: Client[] | null;
  is_loading: Boolean;
}

const initialState: ClientSlice = {
  clients: null,
  is_loading: true,
};

const ClientSlice = createSlice({
  name: "organisations",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.is_loading = true;
    },

    updateClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
      state.is_loading = false;
    },

    pushClient: (state, action: PayloadAction<Client>) => {
      if (state.clients) {
        state.clients.push(action.payload);
      } else {
        state.clients = [action.payload];
      }
      state.is_loading = false;
    },

    replaceClient: (state, action: PayloadAction<Client>) => {
      if (state.clients) {
        const index = state.clients.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.clients[index] = action.payload;
        }
      }
    },

    deleteClient: (state, action: PayloadAction<Client>) => {
      if (state.clients) {
        const index = state.clients.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.clients.splice(index, 1);
        }
      }
    },

    clearClients: (state) => {
      state.clients = null;
    },
  },
});

export const {
  updateClients,
  clearClients,
  setLoading,
  pushClient,
  replaceClient,
  deleteClient,
} = ClientSlice.actions;
export default ClientSlice.reducer;
