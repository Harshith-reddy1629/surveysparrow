import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.css";
import NavInstance from "../navigationInstance";
import { useNavigate } from "react-router-dom";

function Stepone({ children }) {
  const InitialFormValues = JSON.parse(sessionStorage.getItem("stepOne")) ?? {
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    number: "",
  };
  const navigate = useNavigate();

  const [formValues, setValues] = useState(InitialFormValues);

  const [formErrors, setErrors] = useState({});

  const validateAndNavigate = (e) => {
    e.preventDefault();

    const { firstname, lastname, address, email, number } = formValues;

    let newErrors = {};

    if (!firstname) {
      newErrors.firstname = "required";
    }
    if (!lastname) {
      newErrors.lastname = "required";
    }
    if (!address) {
      newErrors.address = "required";
    }
    if (!email) {
      newErrors.email = "required";
    }
    if (!number) {
      newErrors.number = "required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      sessionStorage.setItem("stepOne", JSON.stringify(formValues));

      navigate("/step-2");
    } else {
      return;
    }
  };

  const inputController = (e) => {
    setValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const { firstname, lastname, address, email, number } = formValues;

  console.log(formValues);
  return (
    <div className="flex flex-col gap-2 p-3  rounded-md">
      <h1 className="text-xl font-semibold ">User Information</h1>
      <form onSubmit={validateAndNavigate} className="flex flex-col gap-1">
        <h2 className="font-bold">User Detail</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
          <div className="input-container">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={inputController}
              value={firstname}
              id="firstname"
              placeholder="First name"
            />
            {formErrors.firstname && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={inputController}
              id="lastname"
              value={lastname}
              placeholder="Last name"
            />{" "}
            {formErrors.lastname && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="address">Address</label>
            <textarea
              onChange={inputController}
              className="border rounded border-[#44444480] !text-sm p-1 outline-none"
              rows={4}
              value={address}
              id="address"
              placeholder="Address"
            />{" "}
            {formErrors.address && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
        </div>
        <h2 className="mt-2 font-bold">Contact Detail</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              onChange={inputController}
              id="email"
              value={email}
              placeholder="Email"
            />{" "}
            {formErrors.email && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="number">Phone Number*</label>
            <input
              type="number"
              onChange={inputController}
              id="number"
              value={number}
              placeholder="Phone Number"
            />{" "}
            {formErrors.number && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
        </div>
        <NavInstance />
      </form>
    </div>
  );
}

export default Stepone;
