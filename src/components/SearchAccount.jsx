import { useState } from "react";
import axios from "axios";

function SearchAccount() {
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState([]);

  const searchAccount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/accounts/search?name=${name}`
      );

      console.log(response.data);

      setAccounts(response.data);
    } catch (error) {
      console.error(error);
      alert("Search failed");
    }
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

      {accounts.length > 0 &&
        accounts.map((account) => (
          <div key={account.id}>
            <p>
              <strong>Name:</strong>{" "}
              {account.accountHolderName}
            </p>

            <p>
              <strong>Account Number:</strong>{" "}
              {account.accountNumber}
            </p>

            <p>
              <strong>Balance:</strong> ₹
              {account.balance}
            </p>

            <hr />
          </div>
        ))}
    </div>
  );
}

export default SearchAccount;