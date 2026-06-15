import { useState } from "react";
import axios from "axios";

function Register({ setPage }) {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const registerUser = async () => {

    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const response = await axios.post(
        "https://ai-banking-system-2.onrender.com:8080/api/users/register",
        user
      );

      alert(response.data);

      if (response.data === "User Registered Successfully") {
        setPage("login");
      }

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Registration Failed");
      }

    }

  };

  return (
    <div>

      <h1 className="auth-title">
        AI Banking System
      </h1>

      <p className="auth-subtitle">
        Smart Banking • Secure Transactions • AI Insights
      </p>

      <div className="register-container">

        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value
            })
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value
            })
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value
            })
          }
        />

        <br /><br />

        <button onClick={registerUser}>
          Register
        </button>

        <br /><br />

        <button onClick={() => setPage("login")}>
          Already Have Account? Login
        </button>

      </div>

    </div>
  );
}

export default Register;