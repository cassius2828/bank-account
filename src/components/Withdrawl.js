import React, { useState } from "react";

export const Withdrawl = ({ dispatch, state }) => {
  // this local state allows me to clear the input field to give
  // a better UX
  const [uiText, setUiText] = useState("");

  return (
    <p className="user-inputs user-inputs__withdrawl">
      <input
        className="input-area"
        // the disabled attr based on isActive is for functionality
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
      />
      <button
        className={
          // the class changed based on isActive is for a better UI
          state.isActive
            ? `action-btn action-btn--2`
            : `action-btn--disabled action-btn--2 `
        }
        onClick={() => {
          dispatch({ type: "withdraw" });
          setUiText("");
        }}
        // the disabled attr based on isActive is for functionality
        disabled={state.isActive ? false : true}
      >
        Withdraw ${state.withdrawAmount}
      </button>
      <button
        className={
          // the class changed based on isActive is for a better UI
          state.isActive
            ? `action-btn action-btn--2`
            : `action-btn--disabled action-btn--2 `
        }
        onClick={() => {
          dispatch({ type: "withdrawAll" });
          setUiText(state.balance);
        }}
        // the disabled attr based on isActive is for functionality
        disabled={state.isActive ? false : true}
      >
        Withdraw All
      </button>
    </p>
  );
};
