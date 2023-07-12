import React from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const LoginForm = ({ forgotPassword }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    reset();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full border-2 max-w-lg p-7 space-y-4 rounded-lg border-violet-600 mt-4"
      >
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="input-class"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.username?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder={
              forgotPassword ? "Reset the Password" : "Enter password"
            }
            className="input-class"
            {...register("password", {
              required: "password is required",
              validate: (value) =>
                passwordRegex.test(value) ||
                " Enter a valid Password, Eg: Abcd1234",
            })}
          />
          {errors.password && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.password?.message}
            </p>
          )}
        </div>
        {!forgotPassword && (
          <Link to="/forgot-password">
            <p className="text-base font-medium text-blue-700 underline underline-offset-2">
              Forgot Password
            </p>
          </Link>
        )}

        <button
          type="submit"
          className="py-2 rounded-lg text-lg font-semibold text-white bg-blue-500 transition hover:shadow-lg duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
