import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const data = JSON.parse(localStorage.getItem("usersData"));
  let usersData = data ? data : {};

  const checkPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    setLoading(true);
    if (usersData[data.email]) {
      setTimeout(() => {
        setError("User already exists");
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        usersData[data.email] = data;
        localStorage.setItem("usersData", JSON.stringify(usersData));
        setError("");
        naviagte("/");
        localStorage.setItem("currentUser", JSON.stringify(data.email));
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <div className="w-100  p-5 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-center">Register</h2>
      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      <form
        action=""
        className="flex justify-center flex-col gap-2 h-120"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
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
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                "Password must contain at least one uppercase letter, one number, and one special character",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            minLength: {
              value: 6,
              message: "Confirm Password must be at least 6 characters long",
            },
            validate: (value) => {
              console.log(value, password.value);
              if (value !== password.value) {
                return "Passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-[#FD7D07] p-2 flex justify-center items-center rounded-md cursor-pointer text-white font-bold"
        >
          {loading ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};
