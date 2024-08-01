import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post("https://my.api.mockaroo.com/users.json", data)
      .then((response) => {
        dispatch(setUser(response.data));
        toast.success("Kayıt başarılı! Anasayfaya yönlendiriliyorsunuz...");
        reset();
        navigate("/AnaSayfa");
      })
      .catch((error) => {
        toast.error("Kayıt işlemi başarısız, lütfen tekrar deneyin.");
        reset();
        console.log("Kayıt işlemi başarısız", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* <h2 className="text-2xl font-semibold text-center mb-6">Kayıt Ol</h2> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Kullanıcı adı gerekli" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "E-posta gerekli" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Şifre gerekli" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
