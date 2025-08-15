import { Worker } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface workerState {
  workers: Worker[] | null;
  loading: Boolean;
}

const initialState: workerState = {
  workers: null,
  loading: true,
};

const WorkerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateWorkers: (state, action: PayloadAction<Worker[]>) => {
      state.workers = action.payload;
      state.loading = false;
    },

    pushWorker: (state, action: PayloadAction<Worker>) => {
      if (state.workers) {
        state.workers.push(action.payload);
      } else {
        state.workers = [action.payload];
      }
      state.loading = false;
    },

    clearWorkers: (state) => {
      state.workers = null;
    },

    replaceWorker: (state, action: PayloadAction<Worker>) => {
      if (state.workers) {
        const index = state.workers.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.workers[index] = action.payload;
        }
      }
    },

    deleteWorker: (state, action: PayloadAction<Worker>) => {
      if (state.workers) {
        const index = state.workers.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.workers.splice(index, 1);
        }
      }
    },
  },
});

export const {
  updateWorkers,
  clearWorkers,
  setLoading,
  pushWorker,
  replaceWorker,
  deleteWorker,
} = WorkerSlice.actions;
export default WorkerSlice.reducer;
