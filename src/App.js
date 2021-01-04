import React from "react";
import Game from "./Game";

export default function App() {
  return (
    <div
      className="d-flex flex-column w-100 justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Game />
    </div>
  );
}
