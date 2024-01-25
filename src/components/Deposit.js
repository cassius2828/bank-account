import React, { useState } from "react";

export const Deposit = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  return (
    <p className="user-inputs user-inputs__deposit">
      <input
        className="input-area"
        disabled={state.isActive ? false : true}
        value={uiText}
        type="text"
        placeholder="deposit amount"
        onChange={(e) => {
          dispatch({ type: "depositAmount", payload: Number(e.target.value) });
          setUiText(e.target.value);
        }}
      />
      <button
        // the class changed based on isActive is for a better UI
        className={
          state.isActive
            ? `action-btn action-btn--1`
            : `action-btn--disabled action-btn--1 `
        }
        onClick={() => {
          dispatch({ type: "deposit" });
          dispatch({ type: "clearDepositAmount" });
          setUiText("");
        }}
        // the disabled attr based on isActive is for functionality
        disabled={state.isActive ? false : true}
      >
        Deposit ${state.depositAmount}
      </button>
    </p>
  );
};

