import React, { useState } from "react";

export const Deposit = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  return (
    <p>
      <input
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
        onClick={() => {
          dispatch({ type: "deposit" });
          dispatch({ type: "clearDepositAmount" });
          setUiText("");
        }}
        disabled={state.isActive ? false : true}
      >
        Deposit ${state.depositAmount}
      </button>
    </p>
  );
};
