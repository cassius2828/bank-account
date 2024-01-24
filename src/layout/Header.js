export const Header = ({ state }) => {
  return (
    <>
      {" "}
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>
    </>
  );
};
