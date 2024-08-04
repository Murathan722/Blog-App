import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [],
    title: "",
    content: "",
    status: "idle",
    error: null,
  },
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      state.title = "";
      state.content = "";
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addPost, setTitle, setContent, setStatus, setError } =
  BlogSlice.actions;

export default BlogSlice.reducer;
