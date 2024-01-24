import React, { useState } from "react";

export const Withdrawl = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");
  return (
    <p className="user-inputs user-inputs__withdrawl">
      <input
        className="input-area"
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
        className={
          state.isActive
            ? `action-btn action-btn--2`
            : `action-btn--disabled action-btn--2 `
        }
        // className="action-btn action-btn--2"
        onClick={() => {
          dispatch({ type: "withdraw" });
          setUiText("");
        }}
        disabled={state.isActive ? false : true}
      >
        Withdraw ${state.withdrawAmount}
      </button>
      <button
        className={
          state.isActive
            ? `action-btn action-btn--2`
            : `action-btn--disabled action-btn--2 `
        }
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
