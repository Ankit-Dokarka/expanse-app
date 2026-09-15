import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Paper, TextInput, Stack } from "@mantine/core";

export const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = (data) => {
    setLoading(true);
    const res = login(data);
    if (res.success) {
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setError(res.message);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Paper w={400} p="xl" shadow="md" radius="md" withBorder>
      <h2 className="text-xl font-bold text-center">Login</h2>

      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack gap="md">
          <TextInput
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />
          <TextInput
            label="Password"
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />
          <Button type="submit" loading={loading}>
            Login
          </Button>
          <div className="flex justify-between items-center ">
            <p className="text-sm">Don't have an account ?</p>
            <Link to={"/register"}>Register</Link>
          </div>
        </Stack>
      </form>
    </Paper>
  );
};
