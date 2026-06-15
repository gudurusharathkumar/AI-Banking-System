import { useState } from "react";
import axios from "axios";

function AccountDetails() {

  const [accountNumber, setAccountNumber] = useState("");
  const [account, setAccount] = useState(null);

  const getDetails = async () => {

    const response = await axios.get(
      `https://ai-banking-system-2.onrender.com:8080/api/accounts/details?accountNumber=${accountNumber}`
    );

    setAccount(response.data);
  };

  return (
    <div>
      <h2 className="section-title">
        👤 Account Details
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <button onClick={getDetails}>
        Get Details
      </button>

      {account && (
        <div>
          <p>Name: {account.accountHolderName}</p>
          <p>Account Number: {account.accountNumber}</p>
          <p>Balance: {account.balance}</p>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;