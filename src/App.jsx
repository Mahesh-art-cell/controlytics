import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalysisGroup from './components/AnalysisGroup/AnalysisGroup';
import WaveformSpectrum from './components/Waveform/Waveform';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnalysisGroup />} />
        <Route path="/wave" element={<WaveformSpectrum />} />
        {/* Add routes for other pages */}
        <Route path="/demodulation-spectrum" element={<div>Demodulation Spectrum</div>} />
        <Route path="/bump-test" element={<div>Bump Test</div>} />
        <Route path="/coast-down-run-up" element={<div>Coast Down/Run Up</div>} />
        <Route path="/rotor-balancing" element={<div>Rotor Balancing</div>} />
        <Route path="/zoom-analysis" element={<div>Zoom Analysis</div>} />
      </Routes>
    </Router>
  );
}

export default App;