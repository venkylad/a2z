import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "./Modal.jsx";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?=(\D*\d){0,10}\D*$).*/;
const vehicleRegistrationRegex = /^[A-Z]+$/;

const CreateTicketForm = () => {
  const [currentDateTime] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    const hour = `${now.getHours()}`.padStart(2, "0");
    const minute = `${now.getMinutes()}`.padStart(2, "0");

    return `${year}-${month}-${day}T${hour}:${minute}`;
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = () => {
    reset();
    setIsOpen(true);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full border-2 max-w-lg p-7 space-y-4 rounded-lg border-violet-600 mt-4"
      >
        <div>
          <select
            className="input-class"
            {...register("leadSource", {
              required: "Lead Source is required",
            })}
          >
            <option value="" className="bg-gray-200">
              Lead Source
            </option>
            <option value="web">Web</option>
            <option value="chat">Chat</option>
            <option value="call">Call</option>
          </select>
          {errors.leadSource && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.leadSource?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="input-class w-full"
            name="name"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.fullName?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone Number"
            className="input-class"
            {...register("phone", {
              required: "Phone Number is required",
              validate: (value) =>
                phoneRegex.test(value) ||
                "Phone Number need to be less than 10 digits",
            })}
          />
          {errors.phone && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.phone?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            className="input-class"
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                emailRegex.test(value) || " Enter a valid email",
            })}
          />
          {errors.email && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="vehicle make"
            placeholder="Vehicle Make"
            className="input-class"
            {...register("vehicleMake", {
              required: " Vehicle Make is required",
            })}
          />
          {errors.vehicleMake && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.vehicleMake?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="vehicle registration"
            placeholder="Vehicle Registration Number"
            className="input-class"
            {...register("vehicleRegistration", {
              required: "Vehicle Registration is required",
              validate: (value) =>
                vehicleRegistrationRegex.test(value) ||
                "Enter valid Vehicle Registration Number",
            })}
          />
          {errors.vehicleRegistration && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.vehicleRegistration?.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="issue"
            placeholder="Breakdown Issue"
            className="input-class"
            {...register("breakdownIssue", {
              required: "Breakdown Issue is required",
            })}
          />
          {errors.breakdownIssue && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.breakdownIssue?.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input-class"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.location?.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="fee"
            placeholder="Service Fee"
            className="input-class"
            defaultValue={0}
            {...register("serviceFee")}
          />
        </div>

        <div>
          <input
            name="date"
            type="datetime-local"
            placeholder="Assistance Time"
            className="input-class"
            {...register("assistanceTime", { required: true })}
            defaultValue={currentDateTime}
          />
        </div>

        <div>
          <textarea
            name="comments"
            placeholder="comments"
            className="input-class"
            {...register("comments", { required: "Comments is required" })}
          />
          {errors.comments && (
            <p role="alert" className="font-semibold text-red-600">
              {errors.comments?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="py-2 rounded-lg text-lg font-semibold text-white bg-blue-500 transition hover:shadow-lg duration-200"
        >
          Submit
        </button>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        message="New Task Created Successfully"
      />
    </div>
  );
};

export default CreateTicketForm;
