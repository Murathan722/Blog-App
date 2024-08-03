import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    title: "",
    content: "",
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.title = "";
      state.content = "";
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { setTitle, setContent, setStatus, setError, resetForm } =
  FormSlice.actions;
export default FormSlice.reducer;
