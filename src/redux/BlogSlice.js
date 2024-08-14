import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import localforage from "localforage";

export const loadPosts = createAsyncThunk("blog/loadPosts", async () => {
  const posts = await localforage.getItem("posts");
  return posts || [];
});

export const savePosts = createAsyncThunk("blog/savePosts", async (posts) => {
  await localforage.setItem("posts", posts);
  return posts;
});

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
    deletePost(state, action) {
      state.posts = state.posts.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(savePosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const {
  addPost,
  setTitle,
  setContent,
  setStatus,
  setError,
  deletePost,
} = BlogSlice.actions;

export default BlogSlice.reducer;
