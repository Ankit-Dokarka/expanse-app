import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const data = JSON.parse(localStorage.getItem("usersData"));
  let usersData = data ? data : {};

  const onSubmit = (data) => {
    if (usersData[data.email]) {
      if (usersData[data.email].password === data.password) {
        navigate("/");
        setError("");
        localStorage.setItem("currentUser", JSON.stringify(data.email));
      } else {
        setError("Invalid Credentials");
      }
    } else {
      setError("Please Register");
    }
  };
  return (
    <div className="w-100  p-5 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-center">Login</h2>
      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      <form
        action=""
        className="flex justify-center flex-col gap-2 "
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-[#FD7D07] p-2 text-center rounded-md cursor-pointer text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};
