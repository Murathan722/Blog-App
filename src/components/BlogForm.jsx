import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addPost,
  setTitle,
  setContent,
  setStatus,
  setError,
  deletePost,
  loadPosts,
  savePosts,
} from "../redux/BlogSlice";

const BlogForm = () => {
  const dispatch = useDispatch();
  const { title, content, posts, status, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setStatus("loading"));

    dispatch(addPost({ title, content }));

    dispatch(savePosts([...posts, { title, content }]))
      .then(() => {
        dispatch(setStatus("succeeded"));
      })
      .catch((err) => {
        dispatch(setStatus("failed"));
        dispatch(setError(err.message));
        console.error(
          "Blog yazısı kaydedilirken bir hata oluştu:",
          err.message
        );
      });
  };

  const handleDelete = (index) => {
    dispatch(deletePost(index));

    dispatch(savePosts(posts.filter((_, i) => i !== index)))
      .then(() => {
        console.log("Post başarıyla silindi ve liste güncellendi.");
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.error("Post silme sırasında bir hata oluştu:", err.message);
      });
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
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
        {status === "succeeded" && !error && (
          <p className="text-green-500 text-sm mt-1">
            Blog yazısı başarıyla yayınlandı!
          </p>
        )}
      </form>

      {posts.length > 0 && (
        <div className="mt-4">
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold">Blog Yazıları:</h3>
            {posts.map((post, index) => (
              <div
                key={index}
                className="mt-4 p-4 bg-white border border-gray-200 rounded-md flex justify-between items-start"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{post.title}</h4>
                  <p>{post.content}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-4 px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-100"
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
