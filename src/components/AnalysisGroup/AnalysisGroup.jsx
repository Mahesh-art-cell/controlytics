import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./AnalysisGroup.css"

function AnalysisGroup() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="analysis-groups-container">
      <h2>Analysis Groups</h2>
      <div className="button-container">
        <button className="button" onClick={() => handleNavigation('/wave')}>
          <h3>Waveform & Spectrum</h3>
        </button>
        <button className="button" onClick={() => handleNavigation('/demodulation-spectrum')}>
          <h3>Demodulation Spectrum</h3>
        </button>
        <button className="button" onClick={() => handleNavigation('/bump-test')}>
          <h3>Bump Test</h3>
        </button>
        <button className="button" onClick={() => handleNavigation('/coast-down-run-up')}>
          <h3>Coast Down/Run Up</h3>
        </button>
        <button className="button" onClick={() => handleNavigation('/rotor-balancing')}>
          <h3>Rotor Balancing</h3>
        </button>
        <button className="button" onClick={() => handleNavigation('/zoom-analysis')}>
          <h3>Zoom Analysis</h3>
        </button>
      </div>
    </div>
  );
}

export default AnalysisGroup;