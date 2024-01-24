import React, { useEffect, useState } from "react";

export const LoanRequest = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");

  // check to see if the loan status is true or false
  useEffect(() => {
    if (state.loan > 0) dispatch({ type: "denyLoan" });
  }, [state.eligibleForLoan]);

  return (
    <p className="user-inputs user-inputs__loanRequest">
      <input
        className="input-area"
        disabled={state.isActive && state.eligibleForLoan ? false : true}
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
        className={
          state.isActive && state.eligibleForLoan
            ? `action-btn action-btn--1`
            : `action-btn--disabled action-btn--1 `
        }
        onClick={() => {
          dispatch({ type: "requestLoan" });
          setUiText("");
        }}
        disabled={state.isActive && state.eligibleForLoan ? false : true}
      >
        Request a loan of ${state.loanRequestAmount}
      </button>
    </p>
  );
};
