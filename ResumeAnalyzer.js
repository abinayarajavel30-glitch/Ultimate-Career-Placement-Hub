import React, { useState } from "react";

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState(null);

  const requiredKeywords = ["Java", "React", "Leadership", "Communication"];

  const analyzeResume = () => {
    if (!resumeText.trim()) {
      setFeedback({ type: "error", message: "⚠️ Please paste your resume text before analyzing." });
      return;
    }

    let missing = [];
    requiredKeywords.forEach((word) => {
      if (!resumeText.toLowerCase().includes(word.toLowerCase())) {
        missing.push(word);
      }
    });

    if (missing.length === 0) {
      setFeedback({
        type: "success",
        message: "✅ Great! Your resume contains all key skills recruiters look for.",
      });
    } else {
      setFeedback({
        type: "error",
        message: `❌ Missing important keywords: ${missing.join(", ")}. Consider adding them.`,
      });
    }
  };

  return (
    <div className="page">
      <h2>Resume Analyzer 📝</h2>
      <p>Paste your resume text below to get instant feedback.</p>

      <textarea
        rows="10"
        cols="70"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume here..."
        className="resume-textarea"
      ></textarea>

      <br />
      <button className="cta-btn" onClick={analyzeResume}>
        Analyze Resume
      </button>

      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}