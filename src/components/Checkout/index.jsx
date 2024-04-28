import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

import paths from "../../constants/paths.json";
import "./index.css";

// const paths = ["/step-1", "/step-2", "/step-3"];

const PtoCover = 100 / (paths.length - 1);

function Checkout() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  console.log(useLocation());

  const activeIndex = paths.findIndex((a) => pathname === a);

  return (
    <div className=" bg-white p-5 rounded-md shadow-lg  w-[100vw] max-w-[750px] flex flex-col gap-3 radial-bg ">
      <h1 className="text-center text-2xl mt-1 mb-3 text-[#994bff] tracking-wide uppercase font-bold">
        Checkout
      </h1>
      <div className="relative flex w-full justify-between items-center">
        <div
          style={{ "--a": PtoCover * activeIndex + "%" }}
          className={`absolute top-1/2 p-[1px] left-0 translate-y-[-50%] transition-all duration-700 w-full anim
      `}
        ></div>
        <div
          className={`steps ${
            pathname === "/step-1" && " cone active-step rounded shadow-md"
          }`}
        >
          <FaCheck size={14} /> Personal Details
        </div>
        <div
          className={`steps ${
            pathname === "/step-2" && "cone active-step rounded shadow"
          } `}
        >
          <FaCheck size={14} /> Payment Details
        </div>
        <div
          className={`steps  ${
            pathname === "/step-3" && "cone active-step rounded shadow-md"
          }  `}
        >
          {" "}
          <FaCheck size={14} />
          Review
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Checkout;
