import React from "react";
import { useForm, Controller } from "react-hook-form";
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
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const onSubmit = async (data) => {
    dispatch(setStatus("loading"));

    try {
      await axios.post("/api/blogs", data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Başlık
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue={formData.title}
            render={({ field }) => (
              <input
                id="title"
                {...field}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Başlık girin"
                required
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            İçerik
          </label>
          <Controller
            name="content"
            control={control}
            defaultValue={formData.content}
            render={({ field }) => (
              <textarea
                id="content"
                {...field}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Blog içeriğini girin"
                rows="6"
                required
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white font-semibold focus:outline-none ${
            formData.status === "loading"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={formData.status === "loading"}
        >
          {formData.status === "loading" ? "Yükleniyor..." : "Yayınla"}
        </button>
        {formData.error && (
          <p className="text-red-500 text-sm mt-1">{formData.error}</p>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
