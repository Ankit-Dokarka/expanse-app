import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = ({ setAdmin }) => {
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const data = JSON.parse(localStorage.getItem("usersData"));
  let usersData = data ? data : {};
  const admin = JSON.parse(localStorage.getItem("admin"));
  const onSubmit = (data) => {
    setLoading(true);
    if (admin.email !== data.email) {
      if (usersData[data.email]) {
        if (usersData[data.email].password === data.password) {
          setTimeout(() => {
            navigate("/");
            setError("");
            setAdmin(false);
            localStorage.setItem("currentUser", JSON.stringify(data.email));
            setLoading(false);
          }, 2000);
        } else {
          setTimeout(() => {
            // setError("email", "Invalid Credentials");
            console.log("1");
            setLoading(false);
          }, 2000);
        }
      } else {
        setTimeout(() => {
          setError("root.serverError", {
            type: "manual",
            message: "User not found",
          });
          console.log("2");
          // setError("Please Register");

          setLoading(false);
        }, 2000);
      }
    } else {
      if (admin.password === data.password) {
        setTimeout(() => {
          navigate("/");
          setAdmin(true);
          localStorage.setItem("currentUser", JSON.stringify(data.email));
          setLoading(false);
        }, 2000);
      } else {
        setTimeout(() => {
          setError("Invalid Credentials");
          setLoading(false);
        }, 2000);
      }
    }
  };
  console.log(isSubmitting);
  return (
    <div className="w-100  p-5 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-center">Login</h2>
      {errors.root?.serverError && (
        <p className="text-red-500 text-center">
          {errors.root.serverError.message}
        </p>
      )}
      {/* {error ? <p className="text-red-500 text-center">{error}</p> : null} */}
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
          className="bg-[#FD7D07] p-2 flex justify-center items-center rounded-md cursor-pointer text-white font-bold"
        >
          {loading ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};
