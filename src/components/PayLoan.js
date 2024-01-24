import React, { useEffect, useState } from "react";

export const PayLoan = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  //   reset UI if insufficientFunds alert is triggered
  const cantPayLoan = () => {
    if (!state.insufficientFunds) setUiText("");
  };


  return (
    <p className="user-inputs user-inputs__payLoan">
      <input
        className="input-area"
        disabled={state.isActive ? false : true}
        value={uiText}
        type="text"
        placeholder="pay loan"
        onChange={(e) => {
          dispatch({
            type: "payLoanAmount",
            payload: Number(e.target.value),
          });
          setUiText(e.target.value);
        }}
      />
      <button
        className={
          state.isActive 
            ? `action-btn action-btn--1`
            : `action-btn--disabled action-btn--1 `
        }
        onClick={() => {
          dispatch({ type: "payLoan" });
          cantPayLoan();
        }}
        disabled={state.isActive ? false : true}
      >
        Pay back ${state.loanPayAmount} of your loan
      </button>{" "}
      <button
        className={
          state.isActive
            ? `action-btn action-btn--1`
            : `action-btn--disabled action-btn--1 `
        }
        onClick={() => {
          setUiText(state.loan);
          dispatch({ type: "payOffLoan" });
        }}
        disabled={state.isActive ? false : true}
      >
        Pay off your loan
      </button>
    </p>
  );
};
