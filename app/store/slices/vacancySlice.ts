import { Organization, Vacancy } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface vacancyState {
  vacancies: Vacancy[] | null;
  loading: Boolean;
}

const initialState: vacancyState = {
  vacancies: null,
  loading: true,
};

const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    updateVacancies: (state, action: PayloadAction<Vacancy[]>) => {
      state.vacancies = action.payload;
      state.loading = false;
    },

    pushVacancy: (state, action: PayloadAction<Vacancy>) => {
      if (state.vacancies) {
        state.vacancies.push(action.payload);
      } else {
        state.vacancies = [action.payload];
      }
      state.loading = false;
    },

    clearVacancies: (state) => {
      state.vacancies = null;
    },

    replaceVacancy: (state, action: PayloadAction<Vacancy>) => {
      if (state.vacancies) {
        const index = state.vacancies.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.vacancies[index] = action.payload;
        }
      }
    },

    deleteVacancy: (state, action: PayloadAction<Vacancy>) => {
      if (state.vacancies) {
        const index = state.vacancies.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1 && index !== undefined) {
          state.vacancies.splice(index, 1);
        }
      }
    },
  },
});

export const {
  updateVacancies,
  clearVacancies,
  setLoading,
  pushVacancy,
  replaceVacancy,
  deleteVacancy
} = vacancySlice.actions;
export default vacancySlice.reducer;
