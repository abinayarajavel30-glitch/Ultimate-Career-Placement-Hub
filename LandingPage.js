import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="logo-wrap">
          <img
            src="https://www.pngkey.com/png/detail/51-514700_vector-graphics-rocket-launch-logo-png.png"
            alt="DreamLaunch Logo"
            className="logo-img"
          />
          <h1 className="logo-text">DreamLaunch</h1>
        </div>
        <nav>
          <a href="#" onClick={() => navigate("/auth")}>Login/Signup</a>
          <a href="#" onClick={() => navigate("/resume-analyzer")}>Resume Analyzer</a>
          <a href="#" onClick={() => navigate("/career-guidance")}>Career Guidance</a>
          <a href="#" onClick={() => navigate("/placement-tracker")}>Placement Tracker</a>
          <a href="#" onClick={() => navigate("/mock-interview")}>Mock Interview</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ultimate Career & Placement Hub 🚀
        </motion.h2>
        <p>Your one-stop platform for placements, career growth, and success!</p>
        <button className="cta-btn" onClick={() => navigate("/auth")}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why DreamLaunch?</h2>
        <div className="feature-grid">
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>📝 Resume Analyzer</h3>
            <p>AI-powered tool to refine your resume for top placements.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>🎤 Mock Interviews</h3>
            <p>Practice with real-world interview simulations and feedback.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>📊 Placement Tracker</h3>
            <p>Track your applications, results, and upcoming opportunities.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }}>
            <h3>🎯 Career Guidance</h3>
            <p>Get personalized career suggestions with expert insights.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 DreamLaunch | Designed for Careers</p>
      </footer>
    </div>
  );
}