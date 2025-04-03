// import React, { useState, useEffect } from 'react';
// import "./Waveform.css"

// function WaveformSpectrum() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [readings, setReadings] = useState({
//     acc: 0.0059,
//     vel: 0.0274,
//     disp: 0.2546,
//     rpm: 1.0
//   });

//   const toggleDropdown = (buttonName) => {
//     if (activeDropdown === buttonName) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(buttonName);
//     }
//   };

//   const handleClickOutside = (e) => {
//     if (!e.target.closest('.button')) {
//       setActiveDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="header">Waveform & Spectrum</div>

//       <div className="readings">
//         <div className="reading-item">Acc: <span>{readings.acc.toFixed(4)}</span> g (pk-pk)</div>
//         <div className="reading-item">Vel: <span>{readings.vel.toFixed(4)}</span> mm/s (rms)</div>
//         <div className="reading-item">Disp: <span>{readings.disp.toFixed(4)}</span> µm (pk-pk)</div>
//         <div className="reading-item">RPM: <span>{readings.rpm.toFixed(1)}</span> (Expected)</div>
//       </div>
      
//       <div className="spectrum"></div>
      
//       <div className="buttons">
//         <div className={`button ${activeDropdown === 'traces' ? 'active' : ''}`} onClick={() => toggleDropdown('traces')}>
//           Traces
//           <div className="dropdown">
//             <div>Window and Trace Menu</div>
//             <div>Readings+Waveform</div>
//             <div>Readings+Spectrum</div>
//             <div>Waveform+Spectrum</div>
//             <div>Readings+Readings</div>
//             <div>Waveform+Waveform</div>
//             <div>Spectrum+Spectrum</div>
//             <div>Trace and Window Settings</div>
//           </div>
//         </div>
        
//         <div className={`button ${activeDropdown === 'param' ? 'active' : ''}`} onClick={() => toggleDropdown('param')}>
//           Param
//           <div className="dropdown">
//             <div>Parameter</div>
//             <div>Analysis Parameters</div>
//             <div>Input Channels</div>
//             <div>Output Channels</div>
//             <div>Tachometer</div>
//             <div>Display Preferences</div>
//             <div>Hold Live Signals</div>
//           </div>
//         </div>
        
//         <div className={`button ${activeDropdown === 'control' ? 'active' : ''}`} onClick={() => toggleDropdown('control')}>
//           Control
//           <div className="dropdown">
//             <div>Control</div>
//             <div>Review Measure Record</div>
//           </div>
//         </div>
        
//         <div className={`button ${activeDropdown === 'auto' ? 'active' : ''}`} onClick={() => toggleDropdown('auto')}>
//           Auto
//           <div className="dropdown">
//             <div>Scale</div>
//             <div>Top Trace</div>
//             <div>Bottom Trace</div>
//           </div>
//         </div>
        
//         <div className={`button ${activeDropdown === 'cursor' ? 'active' : ''}`} onClick={() => toggleDropdown('cursor')}>
//           Cursor
//           <div className="dropdown">
//             <div>Cursor Setup</div>
//             <div>Add Cursor X1 to Top Trace</div>
//             <div>Add Cursor X2 to Top Trace</div>
//             <div>Add Cursor X1 to Bottom Trace</div>
//             <div>Add Cursor X2 to Bottom Trace</div>
//             <div>Set Top Trace Cursor Value</div>
//             <div>Set Bottom Trace Cursor Value</div>
//           </div>
//         </div>
        
//         <div className={`button ${activeDropdown === 'startMeas' ? 'active' : ''}`} onClick={() => toggleDropdown('startMeas')}>
//           Start Meas
//           <div className="dropdown">
//             <div>Single</div>
//             <div>Continuous</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WaveformSpectrum;




import React, { useState, useEffect } from 'react';
import "./Waveform.css";

function WaveformSpectrum() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [readings, setReadings] = useState({
    acc: 0.0059,
    vel: 0.0274,
    disp: 0.2546,
    rpm: 1.0
  });
  
  // Display preferences state
  const [displayPreferences, setDisplayPreferences] = useState({
    accSpectrumType: 'Peak-Peak',
    accUnit: 'g',
    velSpectrumType: 'RMS',
    velUnit: 'mm/s',
    dispSpectrumType: 'Peak-Peak',
    dispUnit: 'µm',
    currentSpectrumType: 'RMS',
    currentUnit: 'mA',
    spectrumYAxisType: 'Linear',
    spectrumXAxisType: 'Linear',
    frequencyType: 'Hz'
  });

  const toggleDropdown = (buttonName) => {
    if (activeDropdown === buttonName) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(buttonName);
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (optionName) => {
    if (activeSubDropdown === optionName) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(optionName);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.button') && !e.target.closest('.dropdown') && !e.target.closest('.sub-dropdown')) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  const updatePreference = (preference, value) => {
    setDisplayPreferences(prev => ({
      ...prev,
      [preference]: value
    }));
    
    // Update readings with new random values to simulate real-time updates
    // In a real application, these would come from sensor data
    setReadings({
      acc: Math.random() * 0.01,
      vel: Math.random() * 0.05,
      disp: Math.random() * 0.5,
      rpm: Math.random() * 2 + 0.5
    });
    
    // Close the dropdowns after selection
    setActiveSubDropdown(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to format reading values based on unit type
  const formatReadingValue = (value, unit) => {
    return value.toFixed(4);
  };

  return (
    <div className="container">
      <div className="header">Waveform & Spectrum</div>

      <div className="readings">
        <div className="reading-item">Acc: <span>{formatReadingValue(readings.acc, displayPreferences.accUnit)}</span> {displayPreferences.accUnit} ({displayPreferences.accSpectrumType})</div>
        <div className="reading-item">Vel: <span>{formatReadingValue(readings.vel, displayPreferences.velUnit)}</span> {displayPreferences.velUnit} ({displayPreferences.velSpectrumType})</div>
        <div className="reading-item">Disp: <span>{formatReadingValue(readings.disp, displayPreferences.dispUnit)}</span> {displayPreferences.dispUnit} ({displayPreferences.dispSpectrumType})</div>
        <div className="reading-item">RPM: <span>{readings.rpm.toFixed(1)}</span> (Expected)</div>
      </div>
      
      <div className="spectrum"></div>
      
      <div className="buttons">
        <div className={`button ${activeDropdown === 'traces' ? 'active' : ''}`} onClick={() => toggleDropdown('traces')}>
          Traces
          <div className="dropdown">
            <div>Window and Trace Menu</div>
            <div>Readings+Waveform</div>
            <div>Readings+Spectrum</div>
            <div>Waveform+Spectrum</div>
            <div>Readings+Readings</div>
            <div>Waveform+Waveform</div>
            <div>Spectrum+Spectrum</div>
            <div>Trace and Window Settings</div>
          </div>
        </div>
        
        <div className={`button ${activeDropdown === 'param' ? 'active' : ''}`} onClick={() => toggleDropdown('param')}>
          Param
          <div className="dropdown">
            <div>Parameter</div>
            <div>Analysis Parameters</div>
            <div>Input Channels</div>
            <div>Output Channels</div>
            <div>Tachometer</div>
            <div className="sub-menu-option" onClick={(e) => {
              e.stopPropagation();
              toggleSubDropdown('displayPreferences');
            }}>
              Display Preferences
              {activeSubDropdown === 'displayPreferences' && (
                <div className="sub-dropdown">
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('accSpectrumType');
                  }}>
                    Acceleration Spectrum Type
                    {activeSubDropdown === 'accSpectrumType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('accSpectrumType', 'RMS')}>RMS</div>
                        <div onClick={() => updatePreference('accSpectrumType', 'Peak')}>Peak</div>
                        <div onClick={() => updatePreference('accSpectrumType', 'Peak-Peak')}>Peak-Peak</div>
                        <div onClick={() => updatePreference('accSpectrumType', 'adB (SI)')}>adB (SI)</div>
                        <div onClick={() => updatePreference('accSpectrumType', 'adB (US)')}>adB (US)</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('accUnit');
                  }}>
                    Acceleration Engineering Unit
                    {activeSubDropdown === 'accUnit' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('accUnit', 'g')}>g</div>
                        <div onClick={() => updatePreference('accUnit', 'm/s^2')}>m/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'cm/s^2')}>cm/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'mm/s^2')}>mm/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'μg')}>μg</div>
                        <div onClick={() => updatePreference('accUnit', 'ft/s^2')}>ft/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'in/s^2')}>in/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'mil/s^2')}>mil/s^2</div>
                        <div onClick={() => updatePreference('accUnit', 'Gal')}>Gal</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('velSpectrumType');
                  }}>
                    Velocity Spectrum Type
                    {activeSubDropdown === 'velSpectrumType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('velSpectrumType', 'RMS')}>RMS</div>
                        <div onClick={() => updatePreference('velSpectrumType', 'Peak')}>Peak</div>
                        <div onClick={() => updatePreference('velSpectrumType', 'Peak-Peak')}>Peak-Peak</div>
                        <div onClick={() => updatePreference('velSpectrumType', 'vdB (SI)')}>vdB (SI)</div>
                        <div onClick={() => updatePreference('velSpectrumType', 'vdB (US)')}>vdB (US)</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('velUnit');
                  }}>
                    Velocity Engineering Unit
                    {activeSubDropdown === 'velUnit' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('velUnit', 'm/s')}>m/s</div>
                        <div onClick={() => updatePreference('velUnit', 'cm/s')}>cm/s</div>
                        <div onClick={() => updatePreference('velUnit', 'mm/s')}>mm/s</div>
                        <div onClick={() => updatePreference('velUnit', 'μm/s')}>μm/s</div>
                        <div onClick={() => updatePreference('velUnit', 'ft/s')}>ft/s</div>
                        <div onClick={() => updatePreference('velUnit', 'in/s')}>in/s</div>
                        <div onClick={() => updatePreference('velUnit', 'mil/s')}>mil/s</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('dispSpectrumType');
                  }}>
                    Displacement Spectrum Type
                    {activeSubDropdown === 'dispSpectrumType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('dispSpectrumType', 'RMS')}>RMS</div>
                        <div onClick={() => updatePreference('dispSpectrumType', 'Peak')}>Peak</div>
                        <div onClick={() => updatePreference('dispSpectrumType', 'Peak-Peak')}>Peak-Peak</div>
                        <div onClick={() => updatePreference('dispSpectrumType', 'dB')}>dB</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('dispUnit');
                  }}>
                    Displacement Engineering Unit
                    {activeSubDropdown === 'dispUnit' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('dispUnit', 'm')}>m</div>
                        <div onClick={() => updatePreference('dispUnit', 'cm')}>cm</div>
                        <div onClick={() => updatePreference('dispUnit', 'mm')}>mm</div>
                        <div onClick={() => updatePreference('dispUnit', 'μm')}>μm</div>
                        <div onClick={() => updatePreference('dispUnit', 'ft')}>ft</div>
                        <div onClick={() => updatePreference('dispUnit', 'in')}>in</div>
                        <div onClick={() => updatePreference('dispUnit', 'mil')}>mil</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('currentSpectrumType');
                  }}>
                    Current Spectrum Type
                    {activeSubDropdown === 'currentSpectrumType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('currentSpectrumType', 'RMS')}>RMS</div>
                        <div onClick={() => updatePreference('currentSpectrumType', 'Peak')}>Peak</div>
                        <div onClick={() => updatePreference('currentSpectrumType', 'Peak-Peak')}>Peak-Peak</div>
                        <div onClick={() => updatePreference('currentSpectrumType', 'dB')}>dB</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('currentUnit');
                  }}>
                    Current Engineering Unit
                    {activeSubDropdown === 'currentUnit' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('currentUnit', 'A')}>A</div>
                        <div onClick={() => updatePreference('currentUnit', 'mA')}>mA</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('spectrumYAxisType');
                  }}>
                    Spectrum Y Axis Type
                    {activeSubDropdown === 'spectrumYAxisType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('spectrumYAxisType', 'Linear')}>Linear</div>
                        <div onClick={() => updatePreference('spectrumYAxisType', 'Log')}>Log</div>
                        <div onClick={() => updatePreference('spectrumYAxisType', 'dB')}>dB</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('spectrumXAxisType');
                  }}>
                    Spectrum X Axis Type
                    {activeSubDropdown === 'spectrumXAxisType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('spectrumXAxisType', 'Linear')}>Linear</div>
                        <div onClick={() => updatePreference('spectrumXAxisType', 'Log')}>Log</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="sub-menu-option" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown('frequencyType');
                  }}>
                    Frequency Hz/RPM/Orders
                    {activeSubDropdown === 'frequencyType' && (
                      <div className="sub-dropdown">
                        <div onClick={() => updatePreference('frequencyType', 'Hz')}>Hz</div>
                        <div onClick={() => updatePreference('frequencyType', 'RPM')}>RPM</div>
                        <div onClick={() => updatePreference('frequencyType', 'orders')}>orders</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>Hold Live Signals</div>
          </div>
        </div>
        
        <div className={`button ${activeDropdown === 'control' ? 'active' : ''}`} onClick={() => toggleDropdown('control')}>
          Control
          <div className="dropdown">
            <div>Control</div>
            <div>Review Measure Record</div>
          </div>
        </div>
        
        <div className={`button ${activeDropdown === 'auto' ? 'active' : ''}`} onClick={() => toggleDropdown('auto')}>
          Auto
          <div className="dropdown">
            <div>Scale</div>
            <div>Top Trace</div>
            <div>Bottom Trace</div>
          </div>
        </div>
        
        <div className={`button ${activeDropdown === 'cursor' ? 'active' : ''}`} onClick={() => toggleDropdown('cursor')}>
          Cursor
          <div className="dropdown">
            <div>Cursor Setup</div>
            <div>Add Cursor X1 to Top Trace</div>
            <div>Add Cursor X2 to Top Trace</div>
            <div>Add Cursor X1 to Bottom Trace</div>
            <div>Add Cursor X2 to Bottom Trace</div>
            <div>Set Top Trace Cursor Value</div>
            <div>Set Bottom Trace Cursor Value</div>
          </div>
        </div>
        
        <div className={`button ${activeDropdown === 'startMeas' ? 'active' : ''}`} onClick={() => toggleDropdown('startMeas')}>
          Start Meas
          <div className="dropdown">
            <div>Single</div>
            <div>Continuous</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaveformSpectrum;