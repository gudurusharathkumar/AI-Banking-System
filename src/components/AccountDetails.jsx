import { useState } from "react";
import axios from "axios";

function AccountDetails() {

  const [accountNumber, setAccountNumber] = useState("");
  const [account, setAccount] = useState(null);

  const getDetails = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8081/api/accounts/details?accountNumber=${accountNumber.trim()}`
      );

      setAccount(response.data);

    } catch (error) {

      console.log(error);
      alert("Account Not Found");

    }
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
        onChange={(e) =>
          setAccountNumber(e.target.value)
        }
      />

      <button onClick={getDetails}>
        Get Details
      </button>

      {account && (
        <div>
          <p><b>Account Number:</b> {account.accountNumber}</p>
          <p><b>Account Holder:</b> {account.accountHolderName}</p>
          <p><b>Balance:</b> ₹{account.balance}</p>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;