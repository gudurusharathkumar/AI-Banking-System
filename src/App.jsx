import { useState } from "react";
import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";

import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import TransactionHistory from "./components/TransactionHistory";
import AccountDetails from "./components/AccountDetails";
import SearchAccount from "./components/SearchAccount";
import UpdateAccountName from "./components/UpdateAccountName";
import DeleteAccount from "./components/DeleteAccount";
import AIAnalysis from "./components/AIAnalysis";
import FinancialSuggestions from "./components/FinancialSuggestions";

function App() {

  const [page, setPage] = useState("register");
  const userName = localStorage.getItem("userName");

  if (page === "register") {
    return <Register setPage={setPage} />;
  }

  if (page === "login") {
    return <Login setPage={setPage} />;
  }

  if (page === "dashboard") {
    return (
      <div className="dashboard">

        <div className="header">
          <h2>
            Welcome {userName}
          </h2>
          <p>Smart Banking • Secure Transactions • AI Insights</p>
          <h1>AI Banking System</h1>
        </div>

        <div className="card">
          <CreateAccount />
        </div>

        <div className="card">
          <Deposit />
        </div>

        <div className="card">
          <Withdraw />
        </div>

        <div className="card">
          <Balance />
        </div>

        <div className="card">
          <Transfer />
        </div>

        <div className="card">
          <TransactionHistory />
        </div>

        <div className="card">
          <AccountDetails />
        </div>

        <div className="card">
          <SearchAccount />
        </div>

        <div className="card">
          <UpdateAccountName />
        </div>

        <div className="card">
          <DeleteAccount />
        </div>

        <div className="card">
          <AIAnalysis />
        </div>

        <div className="card">
          <FinancialSuggestions />
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            className="logout-btn"
            onClick={() => setPage("login")}
          >
            Logout
          </button>
        </div>

      </div>
    );
  }

  return null;
}

export default App;