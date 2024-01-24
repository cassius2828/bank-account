import { useKey } from "../customHooks/useKey";

export const CloseAccount = ({ dispatch, state }) => {
  // closing account with esc key
  useKey("escape", () => dispatch({ type: "closeAccount" }));
  return (
    <p className="close-account">
      <button
      className="close-account__button"
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={state.isActive ? false : true}
      >
        Close account
      </button>
    </p>
  );
};
