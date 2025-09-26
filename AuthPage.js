import React, { useState } from "react";
import "./App.css";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    interest: "",
  });
  const [feedback, setFeedback] = useState(null);

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFeedback(null);
    setFormData({ name: "", email: "", password: "", interest: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && (!formData.name || !formData.email || !formData.password || !formData.interest)) {
      setFeedback({ type: "error", message: "⚠️ Please fill all fields to sign up." });
      return;
    }

    if (!isSignup && (!formData.email || !formData.password)) {
      setFeedback({ type: "error", message: "⚠️ Please enter your email and password to login." });
      return;
    }

    if (isSignup) {
      setFeedback({ type: "success", message: `✅ Welcome ${formData.name}! Your career interest in "${formData.interest}" is noted.` });
    } else {
      setFeedback({ type: "success", message: `✅ Login successful! Welcome back.` });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="icon-wrap">
          <img src="https://www.pngkey.com/png/detail/51-514700_vector-graphics-rocket-launch-logo-png.png" alt="Career Icon" />
        </div>
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                className="resume-textarea"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="resume-textarea"
                type="text"
                name="interest"
                placeholder="Career Path / Job Interest"
                value={formData.interest}
                onChange={handleChange}
              />
            </>
          )}

          <input
            className="resume-textarea"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="resume-textarea"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="cta-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {feedback && (
          <div className={`feedback ${feedback.type}`} style={{ marginTop: "1rem" }}>
            {feedback.message}
          </div>
        )}

        <p className="toggle-text" onClick={toggleMode}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
}