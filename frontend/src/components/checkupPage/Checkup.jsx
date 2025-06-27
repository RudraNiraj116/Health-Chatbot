import { useState } from "react";
import "./Checkup.css";

const Checkup = ({ onBack }) => {
  const [bp, setBp] = useState("");
  const [sugar, setSugar] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    let analysis = [];

    const [systolic, diastolic] = bp.split("/").map(Number);
    if (systolic > 140 || diastolic > 90) {
      analysis.push("High Blood Pressure");
    } else if (systolic < 90 || diastolic < 60) {
      analysis.push("Low Blood Pressure");
    } else {
      analysis.push("Normal Blood Pressure");
    }

    const sugarLevel = Number(sugar);
    if (sugarLevel > 180) {
      analysis.push("High Blood Sugar");
    } else if (sugarLevel < 70) {
      analysis.push("Low Blood Sugar");
    } else {
      analysis.push("Normal Blood Sugar");
    }

    const hr = Number(heartRate);
    if (hr < 60) {
      analysis.push("Bradycardia (Low Heart Rate)");
    } else if (hr > 100) {
      analysis.push("Tachycardia (High Heart Rate)");
    } else {
      analysis.push("Normal Heart Rate");
    }

    setResult(analysis.join(" | "));
  };

  return (
    <div className="checkup-wrapper">
      <div className="checkup-header">
        <h2>🩺 Health Checkup</h2>
        <button className="back-btn" onClick={onBack}>← Back to Chat</button>
      </div>

      <div className="checkup-card">
        <div className="form-group">
          <label>Blood Pressure (e.g. 120/80)</label>
          <input
            type="text"
            className="input-bp"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
            placeholder="120/80"
          />
        </div>
        <div className="form-group">
          <label>Blood Sugar (mg/dL)</label>
          <input
            type="number"
            className="input-sugar"
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
            placeholder="90"
          />
        </div>
        <div className="form-group">
          <label>Heart Rate (bpm)</label>
          <input
            type="number"
            className="input-heart-rate"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="75"
          />
        </div>
        <button className="submit-btn" onClick={handleCheck}>
          Check Now
        </button>

        {result && (
          <div className="result">
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkup;
