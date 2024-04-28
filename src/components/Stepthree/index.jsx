import React from "react";
import "./index.css";

import thanks from "../../assets/Thank-You-PNG-Image.png";

import { useState } from "react";
import NavInstance from "../navigationInstance";
import { Navigate } from "react-router-dom";
function Stepthree() {
  const [status, setStatus] = useState(false);
  const previousStepStat = sessionStorage.getItem("stepTwo");
  return (
    <>
      {previousStepStat ? (
        <>
          <div className="p-4 py-8  flex flex-col items-center gap-5">
            {!status ? (
              <>
                <h1 className="text-center text-3xl font-medium">
                  Confirm your Payment
                </h1>
                <button
                  onClick={() => setStatus(true)}
                  className="bg-[#994bff] p-1 text-white px-3 font-medium w-fit shadow-md rounded"
                >
                  Proceed Payment
                </button>
              </>
            ) : (
              <>
                <img src={thanks} className="h-24 drop-shadow-lg " alt="." />
                <p className="text-3xl font-medium text-[#994bff] font-mono">
                  Thank You for Shopping with Us.
                </p>
              </>
            )}{" "}
          </div>
          <NavInstance />
        </>
      ) : (
        <Navigate to="/step-2" />
      )}
    </>
  );
}

export default Stepthree;
