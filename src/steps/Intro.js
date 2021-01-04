import React, { useEffect } from "react";
import Memory from '../assets/memory.png';

export default function Intro({ next, clearList }) {
  useEffect(() => {
    clearList();
  }, []); // eslint-disable-line
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center display-4">
        Serial Position Effect Simulator
      </h1>
      <img src={Memory} alt="Logo" style={{width: "200px"}}/>
      <h2 className="mt-3">Rules:</h2>
      <ul className="mb-3">
        <li>On the next screen, a list of animals will be shown</li>
        <li>You will be given 8 seconds to remember this list of animals</li>
        <li>A timer will show the time elapsed</li>
        <li>After the time ends, you will be asked to recall the animals</li>
        <li>Click start when you are ready to begin!</li>
      </ul>
      <button
        className="btn btn-success btn-lg d-flex align-items-center my-3"
        onClick={next}
      >
        Start{" "}
        <span className="ml-2" style={{ width: "15px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="d-block"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
