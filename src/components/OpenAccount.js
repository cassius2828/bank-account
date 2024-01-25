import React from "react";
import { useKey } from "../customHooks/useKey";

export const OpenAccount = ({ dispatch }) => {
  // open account with enter key
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
