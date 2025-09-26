// CareerGuidance.js
import React, { useState } from "react";
import "./App.css"; // styles are reused

export default function CareerGuidance() {
  const [careerInput, setCareerInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleAnalyze = () => {
    if (!careerInput.trim()) {
      setFeedback({
        type: "error",
        message: "⚠️ Please describe your skills or interests before analyzing.",
      });
      return;
    }

    // Example basic keyword check for validation
    const strongKeywords = ["coding", "design", "leadership", "data", "teaching"];
    const weakKeywords = ["nothing", "bored", "lazy", "idk", "confused"];

    if (weakKeywords.some((word) => careerInput.toLowerCase().includes(word))) {
      setFeedback({
        type: "error",
        message:
          "❌ Your input seems unclear or negative. Try to highlight at least one strength or interest.",
      });
    } else if (strongKeywords.some((word) => careerInput.toLowerCase().includes(word))) {
      setFeedback({
        type: "success",
        message:
          "✅ Great! Based on your input, you have promising career strengths. Keep building on them!",
      });
    } else {
      setFeedback({
        type: "success",
        message:
          "✨ Good start! Consider being more specific about your passions or skills for better guidance.",
      });
    }
  };

  return (
    <div className="page">
      <h1>Career Guidance Hub</h1>
      <p>Enter your interests, passions, or skills to get tailored guidance.</p>
      <textarea
        className="resume-textarea"
        rows="6"
        placeholder="E.g., I love coding and solving real-world problems..."
        value={careerInput}
        onChange={(e) => setCareerInput(e.target.value)}
      />
      <br />
      <button className="cta-btn" onClick={handleAnalyze}>
        Get Guidance
      </button>

      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}