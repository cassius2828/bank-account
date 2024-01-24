import React from "react";
import { useKey } from "../customHooks/useKey";

export const OpenAccount = ({ dispatch }) => {
  // closing account with esc key
  useKey("enter", () => dispatch({ type: "openAccount" }));
  return (
    <p>
      <button
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={false}
      >
        Open account
      </button>
    </p>
  );
};
