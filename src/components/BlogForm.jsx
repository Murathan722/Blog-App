import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setContent, setStatus, resetForm } from "../redux/FormSlice";

const BlogForm = () => {
  const dispatch = useDispatch();
  const { title, content, status } = useSelector((state) => state.form);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setStatus("loading"));

    // Simulate an API call
    setTimeout(() => {
      dispatch(setStatus("succeeded"));
      // Optionally clear the form after submission
      dispatch(resetForm());
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Yeni Blog Yazısı</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Başlık
          </label>
          <input
            id="title"
            onChange={(e) => dispatch(setTitle(e.target.value))}
            value={title}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Başlık girin"
            required
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
            onChange={(e) => dispatch(setContent(e.target.value))}
            value={content}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Blog içeriğini girin"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white font-semibold ${
            status === "loading"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Yükleniyor..." : "Yayınla"}
        </button>
        {status === "failed" && (
          <p className="text-red-500 text-sm mt-1">
            Blog yazısı kaydedilirken bir hata oluştu.
          </p>
        )}
      </form>

      <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
        <h3 className="text-lg font-semibold">Blog Yazısı:</h3>
        <p>
          <strong>Başlık:</strong> {title}
        </p>
        <p>
          <strong>İçerik:</strong> {content}
        </p>
      </div>
    </div>
  );
};

export default BlogForm;
