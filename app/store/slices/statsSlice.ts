import { ClientStats, RevenueStats } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface statsState {
  clients: ClientStats | null;
  revenue: RevenueStats | null;
}

const initialState: statsState = {
  clients: null,
  revenue: null,
};

const StatsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    updateClientStats: (state, action: PayloadAction<ClientStats>) => {
      state.clients = action.payload;
    },

    updateRevenueStats: (state, action: PayloadAction<RevenueStats>) => {
      state.revenue = action.payload;
    },

    clearStats: (state) => {
      state.revenue = null;
      state.clients = null;
    },
  },
});

export const { clearStats, updateClientStats, updateRevenueStats } =
  StatsSlice.actions;
export default StatsSlice.reducer;
