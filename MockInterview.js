// MockInterview.js
import React, { useState } from "react";
import "./App.css";

export default function MockInterview() {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = () => {
    if (!answer.trim()) {
      setFeedback({
        type: "error",
        message: "⚠️ Please provide an answer before submitting.",
      });
      return;
    }

    // Simple evaluation logic
    const positiveKeywords = ["team", "project", "learning", "challenge", "growth"];
    const negativeKeywords = ["nothing", "bored", "don't know", "idk", "lazy"];

    if (negativeKeywords.some((word) => answer.toLowerCase().includes(word))) {
      setFeedback({
        type: "error",
        message: "❌ Your answer seems unmotivated or unclear. Try being more specific and positive.",
      });
    } else if (positiveKeywords.some((word) => answer.toLowerCase().includes(word))) {
      setFeedback({
        type: "success",
        message: "✅ Excellent! Your answer shows motivation, teamwork, and growth mindset.",
      });
    } else if (answer.length < 30) {
      setFeedback({
        type: "error",
        message: "❌ Your answer is too short. Provide more details about your experience or skills.",
      });
    } else {
      setFeedback({
        type: "success",
        message: "✨ Good effort! Try to add keywords about teamwork, learning, or challenges for better impression.",
      });
    }
  };

  return (
    <div className="page">
      <h2>Mock Interview 🎤</h2>
      <p>Answer the following question:</p>
      <p><strong>"Tell us about a project or challenge you have worked on."</strong></p>

      <textarea
        className="resume-textarea"
        rows="8"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <button className="cta-btn" onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Submit Answer
      </button>

      {feedback && (
        <div className={`feedback ${feedback.type}`} style={{ marginTop: "1rem" }}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}