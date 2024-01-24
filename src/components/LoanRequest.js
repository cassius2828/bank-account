import React, { useState } from "react";

export const LoanRequest = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  return (
    <p>
      <input
        disabled={state.isActive ? false : true}
        value={uiText}
        type="text"
        placeholder="request loan"
        onChange={(e) => {
          dispatch({
            type: "loanRequestAmount",
            payload: Number(e.target.value),
          });
          setUiText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch({ type: "requestLoan" });
          setUiText("");
        }}
        disabled={
          state.isActive ? false || state.elgibleForLoan === false : true
        }
      >
        Request a loan of ${state.loanRequestAmount}
      </button>
    </p>
  );
};
