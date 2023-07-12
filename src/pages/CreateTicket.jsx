import React, { useEffect, useState } from "react";
import CreateTicketForm from "../components/CreateTicketForm.jsx";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userExists = localStorage.getItem("user");
    if (!userExists) {
      navigate("/");
    }
  }, []);
  return (
    <main className="mx-auto max-w-7xl p-4 ">
      <h1 className="text-center text-3xl text-gray-800">
        Create a New ticket
      </h1>
      <CreateTicketForm />
    </main>
  );
};

export default CreateTicket;
