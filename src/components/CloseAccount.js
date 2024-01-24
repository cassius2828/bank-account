import { useKey } from "../customHooks/useKey";

export const CloseAccount = ({ dispatch, state }) => {
  // closing account with esc key
  useKey("escape", () => dispatch({ type: "closeAccount" }));
  return (
    <p>
      <button
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={state.isActive ? false : true}
      >
        Close account
      </button>
    </p>
  );
};
