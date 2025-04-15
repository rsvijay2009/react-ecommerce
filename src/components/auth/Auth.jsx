import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./auth.css"; // Add this for styling

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(""); // Clear error message when switching forms
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage(""); // Reset error message

    const url = isSignIn ? "http://localhost:3000/api/login" : "http://localhost:3000/api/register"; // API endpoint
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, requestOptions);
      console.log(response)
      const data = await response.json();

      if (response.ok) {
        // Save user details to localStorage
        localStorage.setItem("user", JSON.stringify({ username: data.username }));
        // Successful response
        navigate("/"); // Redirect to home page
      } else {
        // Handle validation or server errors
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("API error:", error);
      setErrorMessage("Failed to connect to the server");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Left side with image */}
        <div className="auth-image">
          <img
            src="/assets/images/signin-image.webp" // Replace with your image URL
            alt="Auth Illustration"
          />
        </div>

        {/* Right side with form */}
        <div className="auth-form">
          {isSignIn ? (
            <>
              <h2>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="auth-button">Sign In</button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p className="toggle-link">
                Don't have an account?{" "}
                <span onClick={toggleForm}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="auth-button">Sign Up</button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p className="toggle-link">
                Already have an account?{" "}
                <span onClick={toggleForm}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
