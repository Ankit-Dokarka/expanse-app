import { useState } from "react";
import { useForm } from "react-hook-form";

export const Register = () => {
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const data = JSON.parse(localStorage.getItem("usersData"));
  let usersData = data ? data : {};

  const onSubmit = (data) => {
    if (usersData[data.email]) {
      setError("User already exists");
    } else {
      usersData[data.email] = data;
      localStorage.setItem("usersData", JSON.stringify(usersData));
    }
  };
  return (
    <div className="w-100  p-5 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-center">Register</h2>
      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      <form
        action=""
        className="flex justify-center flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="text"
          id="name"
          {...register("name", {
            maxLength: 3,
            message: "Name must be greater than 3 ",
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="email"
          id="email"
          {...register("email")}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="password"
          id="password"
          {...register("password")}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="border-2 border-[#f7bf72] outline-none rounded-sm px-1 py-1"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <button
          type="submit"
          className="bg-[#FD7D07] p-2 text-center rounded-md cursor-pointer text-white font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
};
