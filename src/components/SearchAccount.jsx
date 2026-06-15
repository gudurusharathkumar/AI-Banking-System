import { useState } from "react";
import axios from "axios";

function SearchAccount() {

  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState([]);

  const searchAccount = async () => {

    const response = await axios.get(
      `https://ai-banking-system-2.onrender.com:8080/api/accounts/search?name=${name}`
    );

    setAccounts(response.data);
  };

  return (
    <div>
      <h2 className="section-title">
        🔍 Search Account
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={searchAccount}>
        Search
      </button>

      {accounts.map((account) => (
        <div key={account.id}>
          <p>Name: {account.accountHolderName}</p>
          <p>Account Number: {account.accountNumber}</p>
          <p>Balance: {account.balance}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default SearchAccount;