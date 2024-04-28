import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import paths from "../../constants/paths.json";

import React, { useState } from "react";

function NavInstance({ formvalidStatus }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activeIndex = paths.findIndex((a) => pathname === a);
  return (
    <div className="flex justify-between pt-4">
      {activeIndex !== 0 ? (
        <button
          className="button back"
          onClick={() => navigate(paths[activeIndex - 1])}
        >
          {" "}
          <FaRegArrowAltCircleLeft className="mt-0.5" />
          Back
        </button>
      ) : (
        <p></p>
      )}
      {activeIndex !== paths.length - 1 ? (
        <button
          // disabled={!formvalidStatus}
          className="button next disabled:grayscale disabled:brightness-50 disabled:cursor-not-allowed"
        >
          Next
          <FaRegArrowAltCircleRight className="mt-0.5" />
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default NavInstance;
