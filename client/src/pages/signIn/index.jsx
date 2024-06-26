import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);

      // Extract username from response data
      const { username, exists } = data;
      console.log("Username:", username);

      
      navigate(`/${username}`);

    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <div className="main-signin-container">
        <div className="login-form">
          <div className="logo-container">
            <img src="https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-form-firstbox">
              <label htmlFor="email-or-phone">
                Email or mobile phone number
              </label>
              <input
                id="email-or-phone"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="login-form-secondbox">
              <label htmlFor="password">Your password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              className="login-button"
              type="submit"
            >
              Sign in
            </button>

            <Link to="http://localhost:5173/create">
              <button className="new-customer-button">
                Create your Amazon Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
