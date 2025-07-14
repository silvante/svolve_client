import { Client } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientSlice {
  clients: Client[] | null;
  loading: Boolean;
}

const initialState: ClientSlice = {
  clients: null,
  loading: true,
};

const ClientSlice = createSlice({
  name: "organisations",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
      state.loading = false;
    },

    pushClient: (state, action: PayloadAction<Client>) => {
      if (state.clients) {
        state.clients.push(action.payload);
      } else {
        state.clients = [action.payload];
      }
      state.loading = false;
    },

    clearClients: (state) => {
      state.clients = null;
    },
  },
});

export const { updateClients, clearClients, setLoading, pushClient } =
  ClientSlice.actions;
export default ClientSlice.reducer;
