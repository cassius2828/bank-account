import { useEffect } from "react";

export const Alert = ({ state, dispatch }) => {
  useEffect(() => {
    if (state.insufficientFunds) {
      alert("insufficent funds");
      dispatch({ type: "insufficeintFundsAlert" });
    }
  }, [state.insufficientFunds, dispatch]);
  return <></>;
};
