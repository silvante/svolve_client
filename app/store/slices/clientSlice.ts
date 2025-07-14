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

    clearClients: (state) => {
      state.clients = null;
    },
  },
});

export const { updateClients, clearClients, setLoading, pushClient } =
  ClientSlice.actions;
export default ClientSlice.reducer;
