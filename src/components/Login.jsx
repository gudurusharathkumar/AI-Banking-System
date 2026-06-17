import { useState } from "react";
import axios from "axios";

function Login({ setPage }) {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const loginUser = async () => {

    if (
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      alert("Please enter Email and Password");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:8081/api/users/login",
        user
      );

      if (
        response.data === "User Not Found" ||
        response.data === "Invalid Password"
      ) {

        alert(response.data);

      } else {

        localStorage.setItem(
          "userName",
          response.data
        );

        alert("Login Successful");

        setPage("dashboard");
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");

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

      <div className="login-container">

        <h1>Login</h1>

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

        <button onClick={loginUser}>
          Login
        </button>

        <br /><br />

        <button onClick={() => setPage("register")}>
          Create New Account
        </button>

      </div>

    </div>
  );
}

export default Login;