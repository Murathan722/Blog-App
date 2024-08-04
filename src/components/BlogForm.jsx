import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setContent,
  setStatus,
  setError,
  resetForm,
} from "../redux/FormSlice";
import axios from "axios";
import { toast } from "react-toastify";

const BlogForm = () => {
  const dispatch = useDispatch();
  const { title, content, status, error } = useSelector((state) => state.form);

  const handleSubmit = async () => {
    dispatch(setStatus("loading"));
    try {
      await axios.post("/api/blogs", { title, content });
      dispatch(setStatus("succeeded"));
      dispatch(resetForm());
      toast.success("Blog yazısı başarıyla kaydedildi!");
    } catch (error) {
      dispatch(setStatus("failed"));
      dispatch(
        setError(error.response ? error.response.data : "Bir hata oluştu.")
      );
      toast.error("Blog yazısı kaydedilirken bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Yeni Blog Yazısı</h2>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Başlık
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Başlık girin"
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          İçerik
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => dispatch(setContent(e.target.value))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Blog içeriğini girin"
          rows="6"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white font-semibold focus:outline-none ${
          status === "loading"
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Yükleniyor..." : "Yayınla"}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default BlogForm;
