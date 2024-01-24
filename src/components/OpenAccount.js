import React from "react";
import { useKey } from "../customHooks/useKey";

export const OpenAccount = ({ dispatch }) => {
  // closing account with esc key
  useKey("enter", () => dispatch({ type: "openAccount" }));
  return (
    <p className="open-account">
      <button
      className="open-account__button"
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={false}
      >
        Open account
      </button>
    </p>
  );
};
