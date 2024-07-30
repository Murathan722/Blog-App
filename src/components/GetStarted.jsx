import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <section className="bg-blue-100 py-12 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Hadi Başlayalım!
        </h2>
        <p className="text-gray-700 mb-8">
          Blogumuzun tüm özelliklerinden yararlanmak ve içeriklere erişmek için
          hemen kayıt olun.
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Kayıt Ol
        </button>
      </div>
    </section>
  );
}

export default GetStarted;
