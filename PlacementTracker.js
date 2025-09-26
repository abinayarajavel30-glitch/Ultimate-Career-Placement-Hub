// PlacementTracker.js
import React, { useState } from "react";
import "./App.css";

export default function PlacementTracker() {
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Pending");
  const [feedback, setFeedback] = useState(null);

  const handleAddApplication = () => {
    if (!company.trim()) {
      setFeedback({
        type: "error",
        message: "⚠️ Please enter a company name before adding.",
      });
      return;
    }

    const newApp = { company: company.trim(), status };
    setApplications([...applications, newApp]);
    setCompany("");
    setStatus("Pending");

    if (status.toLowerCase() === "selected") {
      setFeedback({
        type: "success",
        message: `✅ Congratulations! Your application to ${newApp.company} is successful!`,
      });
    } else if (status.toLowerCase() === "rejected") {
      setFeedback({
        type: "error",
        message: `❌ Unfortunately, your application to ${newApp.company} was not successful.`,
      });
    } else {
      setFeedback({
        type: "success",
        message: `📌 Application to ${newApp.company} added successfully. Status: ${newApp.status}`,
      });
    }
  };

  return (
    <div className="page">
      <h2>Placement Tracker 📊</h2>
      <p>Add your placement applications and track their status.</p>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="resume-textarea"
      />
      <br />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginTop: "1rem", padding: "0.5rem", borderRadius: "10px" }}
      >
        <option value="Pending">Pending</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>
      <br />
      <button className="cta-btn" onClick={handleAddApplication} style={{ marginTop: "1rem" }}>
        Add Application
      </button>

      {feedback && (
        <div className={`feedback ${feedback.type}`} style={{ marginTop: "1rem" }}>
          {feedback.message}
        </div>
      )}

      {applications.length > 0 && (
        <div style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          <h3>Your Applications:</h3>
          <ul>
            {applications.map((app, index) => (
              <li key={index}>
                <strong>{app.company}</strong> - {app.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}