import React, { useState } from "react";
import "./index.css";
import NavInstance from "../navigationInstance";
import { Navigate, useNavigate } from "react-router-dom";
function Steptwo() {
  const [activeMethod, setActiveMethod] = useState("credit");
  const InitialFormValues = JSON.parse(sessionStorage.getItem("stepTwo")) ?? {
    cardfirstname: "",
    cardlastname: "",
    cardnumber: "",
    cvv: "",
    MM: "",
    YY: "",
  };
  const navigate = useNavigate();

  const [formValues, setValues] = useState(InitialFormValues);

  const [formErrors, setErrors] = useState({});

  const validateAndNavigate = (e) => {
    e.preventDefault();

    const { cardfirstname, cardlastname, cardnumber, cvv, MM, YY } = formValues;

    let newErrors = {};

    if (!cardfirstname) {
      newErrors.cardfirstname = "required";
    }
    if (!cardlastname) {
      newErrors.cardlastname = "required";
    }
    if (!cardnumber) {
      newErrors.cardnumber = "required";
    }
    if (!cvv) {
      newErrors.cvv = "required";
    }
    if (!MM) {
      newErrors.MM = "required";
    }
    if (!YY) {
      newErrors.YY = "required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      sessionStorage.setItem("stepTwo", JSON.stringify(formValues));

      navigate("/step-3");
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
  const previousStepStat = sessionStorage.getItem("stepOne");

  const { cardfirstname, cardlastname, cardnumber, cvv, MM, YY } = formValues;
  if (previousStepStat) {
    return (
      <form onSubmit={validateAndNavigate} className="flex flex-col gap-2">
        <h1 className="font-semibold">Choose a payment method</h1>
        <div className="grid grid-cols-3 gap-3 py-1 ">
          <button
            className={`payment-btn ${
              activeMethod === "credit" && "active-method"
            }`}
          >
            Credit card
          </button>
          <button
            className={`payment-btn ${
              activeMethod === "paypal" && "active-method"
            }`}
          >
            Paypal
          </button>
          <button
            className={`payment-btn ${
              activeMethod === "bank" && "active-method"
            }`}
          >
            Bank Transfer
          </button>
        </div>
        <h1 className="font-semibold">Payment details</h1>
        <div className="grid grid-cols-2  gap-3 py-1 ">
          <div className="input-container">
            <label>First name</label>
            <input
              onChange={inputController}
              value={cardfirstname}
              id="cardfirstname"
              placeholder="card holder first name"
              className="border-gray-300"
            />{" "}
            {formErrors.cardfirstname && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="input-container">
            <label>Last name</label>
            <input
              onChange={inputController}
              value={cardlastname}
              id="cardlastname"
              placeholder="card holder last name"
              className="border-gray-300"
            />{" "}
            {formErrors.cardlastname && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="input-container">
            <label>Card Number</label>
            <input
              value={cardnumber}
              id="cardnumber"
              type="number"
              onChange={inputController}
              placeholder="card number"
              onInput={(e) => {
                if (e.target.value.length !== 16) {
                  e.target.setCustomValidity("Enter valid Card Number.");
                } else {
                  e.target.setCustomValidity("");
                }
              }}
              className="border-gray-300"
            />{" "}
            {formErrors.cardnumber && (
              <p className="text-xs relative -translate-y-1 text-red-500">
                required*
              </p>
            )}
          </div>
          <div className="flex  gap-3">
            <div className="input-container flex-[_1_1_60%] justify-start">
              <label>CVV</label>
              <input
                onChange={inputController}
                onInput={(e) => {
                  if (e.target.value.length !== 3) {
                    e.target.setCustomValidity("Enter valid CVV.");
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
                type="number"
                value={cvv}
                id="cvv"
                maxLength={3}
                placeholder="cvv"
                className="border-gray-300 w-full "
              />{" "}
              {formErrors.cvv && (
                <p className="text-xs relative -translate-y-1 text-red-500">
                  required*
                </p>
              )}
            </div>{" "}
            <div className="input-container flex-[_1_1_40%] justify-start">
              <label>Expiration</label>
              <div className="flex gap-0.5 border-2 rounded overflow-hidden">
                <input
                  value={MM}
                  onInput={(e) => {
                    if (e.target.value > 12 || e.target.value < 0) {
                      e.target.setCustomValidity("1-12");
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}
                  id="MM"
                  max={12}
                  onChange={inputController}
                  type="number"
                  placeholder="MM"
                  className="border-gray-300  w-full border-none rounded-none "
                />
                <input
                  onChange={inputController}
                  type="number"
                  placeholder="YY"
                  value={YY}
                  id="YY"
                  className="border-gray-300  w-full border-none rounded-none"
                />
              </div>{" "}
              {(formErrors.YY || formErrors.MM) && (
                <p className="text-xs relative -translate-y-1 text-red-500">
                  required*
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="bg-[#994bff] p-1 text-white px-3 font-medium shadow-md rounded">
            Proceed Payment
          </button>
        </div>
        <NavInstance />
      </form>
    );
  } else {
    return <Navigate to="/step-1" />;
  }
}

export default Steptwo;
