import { useEffect, useReducer } from "react";
import "./css/style.css";
import { Header } from "./layout/Header";
import { OpenAccount } from "./components/OpenAccount";
import { Deposit } from "./components/Deposit";
import { Withdrawl } from "./components/Withdrawl";
import { LoanRequest } from "./components/LoanRequest";
import { PayLoan } from "./components/PayLoan";
import { CloseAccount } from "./components/CloseAccount";
import { Alert } from "./components/Alert";
import { useKey } from "./customHooks/useKey";
import { Main } from "./layout/Main";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  withdrawAmount: null,
  depositAmount: null,
  loanRequestAmount: null,
  loanPayAmount: null,
  eligbleForLoan: true,
  insufficientFunds: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + state.depositAmount };
    case "depositAmount":
      return { ...state, depositAmount: action.payload };
    case "clearDepositAmount":
      return { ...state, depositAmount: null };
    case "withdraw":
      if (state.balance >= state.withdrawAmount)
        return {
          ...state,
          balance: state.balance - state.withdrawAmount,
          withdrawAmount: null,
        };
      else return { ...state, insufficientFunds: true, withdrawAmount: null };
    case "withdrawAmount":
      return { ...state, withdrawAmount: action.payload };
    case "withdrawAll":
      return { ...state, withdrawAmount: state.balance };

    case "requestLoan":
      return {
        ...state,

        balance: state.balance + state.loanRequestAmount,
        loan: state.loan + state.loanRequestAmount,
        loanRequestAmount: null,
        eligbleForLoan: false,
      };
    case "loanRequestAmount":
      return { ...state, loanRequestAmount: action.payload };

    case "payLoan":
      if (state.balance > state.loanPayAmount)
        return {
          ...state,
          balance:
            state.loan - state.loanPayAmount > -1
              ? state.balance - state.loanPayAmount
              : state.balance -
                state.loanPayAmount +
                (state.loan - state.loanPayAmount) * -1,

          loan:
            state.loan - state.loanPayAmount > -1
              ? state.loan - state.loanPayAmount
              : 0,
          loanPayAmount: null,
        };
      else return { ...state, insufficientFunds: true };
    case "payLoanAmount":
      return { ...state, loanPayAmount: action.payload };
    case "payOffLoan":
      return { ...state, loanPayAmount: state.loan };
    case "insufficeintFundsAlert":
      return { ...state, insufficientFunds: false, loanPayAmount: null };
    case "closeAccount":
      if (state.balance > 0 || state.loan > 0) return { ...state };
      else return { ...initialState };

    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      <Header state={state} />
      
      <Main>
        {" "}
        <OpenAccount state={state} dispatch={dispatch} />
        <Deposit state={state} dispatch={dispatch} />
        <Withdrawl state={state} dispatch={dispatch} />
        <LoanRequest state={state} dispatch={dispatch} />
        <PayLoan state={state} dispatch={dispatch} />
        <CloseAccount state={state} dispatch={dispatch} />
      </Main>

      <Alert dispatch={dispatch} state={state} />
    </>
  );
}
