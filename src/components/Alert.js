import { useEffect } from "react";

export const Alert = ({ state, dispatch }) => {
  // checks if the insufficientFunds state is changed to true and displays 
  // an alert to the user
  useEffect(() => {
    if (state.insufficientFunds) {
      alert("insufficent funds");
      dispatch({ type: "insufficeintFundsAlert" });
    }
  }, [state.insufficientFunds, dispatch]);
  return <></>;
};
