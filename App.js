import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import ResumeAnalyzer from "./ResumeAnalyzer";
import CareerGuidance from "./CareerGuidance";
import PlacementTracker from "./PlacementTracker";
import MockInterview from "./MockInterview";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login / Signup */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Career Tools */}
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/placement-tracker" element={<PlacementTracker />} />
        <Route path="/mock-interview" element={<MockInterview />} />
      </Routes>
    </Router>
  );
}

export default App;