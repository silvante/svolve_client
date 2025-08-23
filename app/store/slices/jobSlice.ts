import { Worker } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobState {
  currentJob: Worker | null;
  loading: Boolean;
}

const initialState: JobState = {
  currentJob: null,
  loading: true,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateJob: (state, action: PayloadAction<Worker>) => {
      state.currentJob = action.payload;
      state.loading = false;
    },

    clearJob: (state) => {
      state.currentJob = null;
    },
  },
});

export const { updateJob, clearJob, setLoading } = jobSlice.actions;
export default jobSlice.reducer;
