import { useKey } from "../customHooks/useKey";

export const CloseAccount = ({ dispatch, state }) => {
  // closing account with esc key
  useKey("escape", () => dispatch({ type: "closeAccount" }));
  return (
    <p className="close-account">
      <button
        // the class changed based on isActive is for a better UI

        className={
          // the class changed based on isActive is for a better UI
          state.isActive
            ? `close-account__btn`
            : `close-account__btn--disabled `
        }
        onClick={() => dispatch({ type: "closeAccount" })}
        // the disabled attr based on isActive is for functionality
        disabled={state.isActive ? false : true}
      >
        Close account
      </button>
    </p>
  );
};
