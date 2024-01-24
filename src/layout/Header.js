import logo from "../images/maze-bank-redBG.png";
export const Header = ({ state }) => {
  return (
    <div className="header header--container">
      {" "}
      <div className="header--container__content ">
             <img width='30px' className="header--logo" id="logo" src={logo} alt="" />     <h1 className=" header--title">
          {" "}

          useBank
        </h1>
      </div>
      <div className="header-details--container">
        <h2 className=" header-details header-details__balance">
          Balance: <strong>{state.balance}</strong>
        </h2>
        <h2 className=" header-details header-details__loan">
          Loan: <strong>{state.loan}</strong>
        </h2>
      </div>
    </div>
  );
};
