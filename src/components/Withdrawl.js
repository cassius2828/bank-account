import React, { useState } from "react";

export const Withdrawl = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  return (
    <p>
      <input
        disabled={state.isActive ? false : true}
        value={uiText}
        type="text"
        placeholder="withdrawal amount"
        onChange={(e) => {
          dispatch({
            type: "withdrawAmount",
            payload: Number(e.target.value),
          });
          setUiText(e.target.value);
        }}
        //  onClick={() => {}} disabled={isActive ? false : true}
      />
      <button
        onClick={() => {
          dispatch({ type: "withdraw" });
          setUiText("");
        }}
        disabled={state.isActive ? false : true}
      >
        Withdraw ${state.withdrawAmount}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdrawAll" });
          setUiText(state.balance);
        }}
        disabled={state.isActive ? false : true}
      >
        Withdraw All
      </button>
    </p>
  );
};
