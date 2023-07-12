import React from "react";
import LoginForm from "../components/LoginForm.jsx";

const ForgotPassword = () => {
  return (
    <main className="mx-auto max-w-7xl p-4 ">
      <h1 className="text-center text-3xl text-gray-800">Reset the Password</h1>
      <LoginForm forgotPassword />
    </main>
  );
};

export default ForgotPassword;
