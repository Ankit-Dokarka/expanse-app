import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Button,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  const { signUp } = useAuth();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const checkPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    setLoading(true);
    const res = signUp(data);
    if (res.success) {
      setTimeout(() => {
        setLoading(false);
        naviagte("/");
      }, 2000);
    } else {
      setTimeout(() => {
        setError(res.message);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Paper w={400} p="md" shadow="md" radius="md" withBorder>
      <Title order={2} ta="center">
        Register
      </Title>
      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack gap="md">
          <TextInput
            label="Name"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            error={errors?.name?.message}
          />

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
            error={errors?.email?.message}
          />
          <TextInput
            label="Password"
            type="password"
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
            error={errors?.password?.message}
          />
          <TextInput
            label="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => {
                if (value !== password.value) {
                  return "Passwords do not match";
                }
              },
            })}
            error={errors?.confirmPassword?.message}
          />

          <Button type="submit" loading={loading}>
            Register
          </Button>
          <Group justify="space-between">
            <Text size="sm">Already have an account ?</Text>
            <Link to={"/login"}>Login</Link>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
};
