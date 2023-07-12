import React from "react";
import LoginForm from "../components/LoginForm.jsx";

const Login = () => {
  return (
    <main className="mx-auto max-w-7xl p-4 ">
      <h1 className="text-center text-3xl text-gray-800">
        Login to Create Ticket
      </h1>
      <LoginForm />
    </main>
  );
};

export default Login;
