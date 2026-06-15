import { useState } from "react";
import axios from "axios";

function UpdateAccountName() {

  const [accountNumber, setAccountNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const updateName = async () => {

    const response = await axios.put(
      `https://ai-banking-system-2.onrender.com:8080/api/accounts/update-name?accountNumber=${accountNumber}&newName=${newName}`
    );

    setMessage(response.data);
  };

  return (
    <div>
      <h2 className="section-title">
        ✏️ Update Account Name
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) =>
          setAccountNumber(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={(e) =>
          setNewName(e.target.value)
        }
      />

      <button onClick={updateName}>
        Update
      </button>

      <h3>{message}</h3>
    </div>
  );
}

export default UpdateAccountName;