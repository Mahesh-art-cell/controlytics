
// import React, { useState, useEffect } from 'react';
// import "./Waveform.css";

// function WaveformSpectrum() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [subDropdown, setSubDropdown] = useState(null);
//   const [optionsDropdown, setOptionsDropdown] = useState(null);
  
//   // Display preferences state
//   const [displayPrefs, setDisplayPrefs] = useState({
//     accSpectrumType: 'Peak-Peak',
//     accUnit: 'g',
//     velSpectrumType: 'RMS',
//     velUnit: 'mm/s',
//     dispSpectrumType: 'Peak-Peak',
//     dispUnit: 'µm',
//     currentSpectrumType: 'RMS',
//     currentUnit: 'A',
//     spectrumYAxisType: 'Linear',
//     spectrumXAxisType: 'Linear',
//     frequencyUnit: 'Hz'
//   });
  
//   const [readings, setReadings] = useState({
//     acc: 0.0059,
//     vel: 0.0274,
//     disp: 0.2546,
//     rpm: 1.0
//   });

//   // All available options for each preference
//   const options = {
//     accSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'adB (SI)', 'adB (US)'],
//     accUnit: ['g', 'm/s^2', 'cm/s^2', 'mm/s^2', 'μg', 'ft/s^2', 'in/s^2', 'mil/s^2', 'Gal'],
//     velSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'vdB (SI)', 'vdB (US)'],
//     velUnit: ['m/s', 'cm/s', 'mm/s', 'μm/s', 'ft/s', 'in/s', 'mil/s'],
//     dispSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'dB'],
//     dispUnit: ['m', 'cm', 'mm', 'μm', 'ft', 'in', 'mil'],
//     currentSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'dB'],
//     currentUnit: ['A', 'mA'],
//     spectrumYAxisType: ['Linear', 'Log', 'dB'],
//     spectrumXAxisType: ['Linear', 'Log'],
//     frequencyUnit: ['Hz', 'RPM', 'Orders']
//   };

//   // Display names for menu items
//   const displayNames = {
//     accSpectrumType: 'Acceleration Spectrum Type',
//     accUnit: 'Acceleration Engineering Unit',
//     velSpectrumType: 'Velocity Spectrum Type',
//     velUnit: 'Velocity Engineering Unit',
//     dispSpectrumType: 'Displacement Spectrum Type',
//     dispUnit: 'Displacement Engineering Unit',
//     currentSpectrumType: 'Current Spectrum Type',
//     currentUnit: 'Current Engineering Unit',
//     spectrumYAxisType: 'Spectrum Y Axis Type',
//     spectrumXAxisType: 'Spectrum X Axis Type',
//     frequencyUnit: 'Frequency Hz/RPM/Orders'
//   };

//   // Toggle main dropdown menus
//   const toggleDropdown = (buttonName) => {
//     if (activeDropdown === buttonName) {
//       setActiveDropdown(null);
//       setSubDropdown(null);
//       setOptionsDropdown(null);
//     } else {
//       setActiveDropdown(buttonName);
//       setSubDropdown(null);
//       setOptionsDropdown(null);
//     }
//   };
  
//   // Toggle display preferences submenu
//   const toggleSubDropdown = (prefName) => {
//     if (subDropdown === prefName) {
//       setSubDropdown(null);
//       setOptionsDropdown(null);
//     } else {
//       setSubDropdown(prefName);
//       setOptionsDropdown(null);
//     }
//   };
  
//   // Toggle options for a specific preference
//   const toggleOptionsDropdown = (optionName) => {
//     if (optionsDropdown === optionName) {
//       setOptionsDropdown(null);
//     } else {
//       setOptionsDropdown(optionName);
//     }
//   };
  
//   // Handle selection from options dropdown
//   const handleOptionSelect = (prefName, value) => {
//     setDisplayPrefs(prev => ({
//       ...prev,
//       [prefName]: value
//     }));
//     setOptionsDropdown(null);
//   };

//   // Close dropdowns when clicking outside
//   const handleClickOutside = (e) => {
//     if (!e.target.closest('.dropdown') && !e.target.closest('.button') && 
//         !e.target.closest('.sub-dropdown') && !e.target.closest('.options-dropdown')) {
//       setActiveDropdown(null);
//       setSubDropdown(null);
//       setOptionsDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   // Get abbreviated display name for spectrum type
//   const getSpectrumTypeAbbreviation = (type) => {
//     switch (type) {
//       case 'RMS': return 'rms';
//       case 'Peak': return 'pk';
//       case 'Peak-Peak': return 'pk-pk';
//       default: return type.toLowerCase();
//     }
//   };

//   return (
//     <div className="container">
//       <div className="header">Waveform & Spectrum</div>

//       <div className="readings">
//         <div className="reading-item">
//           Acc: <span>{readings.acc.toFixed(4)}</span> {displayPrefs.accUnit} ({getSpectrumTypeAbbreviation(displayPrefs.accSpectrumType)})
//         </div>
//         <div className="reading-item">
//           Vel: <span>{readings.vel.toFixed(4)}</span> {displayPrefs.velUnit} ({getSpectrumTypeAbbreviation(displayPrefs.velSpectrumType)})
//         </div>
//         <div className="reading-item">
//           Disp: <span>{readings.disp.toFixed(4)}</span> {displayPrefs.dispUnit} ({getSpectrumTypeAbbreviation(displayPrefs.dispSpectrumType)})
//         </div>
//         <div className="reading-item">
//           RPM: <span>{readings.rpm.toFixed(1)}</span> (Expected)
//         </div>
//       </div>
      
//       <div className="spectrum"></div>
      
//       <div className="buttons">
//         <div className={`button ${activeDropdown === 'traces' ? 'active' : ''}`} onClick={() => toggleDropdown('traces')}>
//           Traces
//           {activeDropdown === 'traces' && (
//             <div className="dropdown">
//               <div>Window and Trace Menu</div>
//               <div>Readings+Waveform</div>
//               <div>Readings+Spectrum</div>
//               <div>Waveform+Spectrum</div>
//               <div>Readings+Readings</div>
//               <div>Waveform+Waveform</div>
//               <div>Spectrum+Spectrum</div>
//               <div>Trace and Window Settings</div>
//             </div>
//           )}
//         </div>
        
//         <div className={`button ${activeDropdown === 'param' ? 'active' : ''}`} onClick={() => toggleDropdown('param')}>
//           Param
//           {activeDropdown === 'param' && (
//             <div className="dropdown">
//               <div>Parameter</div>
//               <div>Analysis Parameters</div>
//               <div>Input Channels</div>
//               <div>Output Channels</div>
//               <div>Tachometer</div>
//               <div onClick={(e) => {
//                 e.stopPropagation();
//                 toggleSubDropdown('displayPrefs');
//               }}>
//                 Display Preferences
//                 {subDropdown === 'displayPrefs' && (
//                   <div className="sub-dropdown">
//                     {Object.keys(displayNames).map(prefKey => (
//                       <div 
//                         key={prefKey}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleOptionsDropdown(prefKey);
//                         }}
//                         className="sub-menu-item"
//                       >
//                         {displayNames[prefKey]}
//                         {optionsDropdown === prefKey && (
//                           <div className="options-dropdown">
//                             {options[prefKey].map(option => (
//                               <div 
//                                 key={option}
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   handleOptionSelect(prefKey, option);
//                                 }}
//                               >
//                                 {option}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div>Hold Live Signals</div>
//             </div>
//           )}
//         </div>
        
//         <div className={`button ${activeDropdown === 'control' ? 'active' : ''}`} onClick={() => toggleDropdown('control')}>
//           Control
//           {activeDropdown === 'control' && (
//             <div className="dropdown">
//               <div>Control</div>
//               <div>Review Measure Record</div>
//             </div>
//           )}
//         </div>
        
//         <div className={`button ${activeDropdown === 'auto' ? 'active' : ''}`} onClick={() => toggleDropdown('auto')}>
//           Auto
//           {activeDropdown === 'auto' && (
//             <div className="dropdown">
//               <div>Scale</div>
//               <div>Top Trace</div>
//               <div>Bottom Trace</div>
//             </div>
//           )}
//         </div>
        
//         <div className={`button ${activeDropdown === 'cursor' ? 'active' : ''}`} onClick={() => toggleDropdown('cursor')}>
//           Cursor
//           {activeDropdown === 'cursor' && (
//             <div className="dropdown">
//               <div>Cursor Setup</div>
//               <div>Add Cursor X1 to Top Trace</div>
//               <div>Add Cursor X2 to Top Trace</div>
//               <div>Add Cursor X1 to Bottom Trace</div>
//               <div>Add Cursor X2 to Bottom Trace</div>
//               <div>Set Top Trace Cursor Value</div>
//               <div>Set Bottom Trace Cursor Value</div>
//             </div>
//           )}
//         </div>
        
//         <div className={`button ${activeDropdown === 'startMeas' ? 'active' : ''}`} onClick={() => toggleDropdown('startMeas')}>
//           Start Meas
//           {activeDropdown === 'startMeas' && (
//             <div className="dropdown">
//               <div>Single</div>
//               <div>Continuous</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WaveformSpectrum;



import React, { useState, useEffect } from 'react';
import "./Waveform.css";

function WaveformSpectrum() {
  // Navigation state
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentView, setCurrentView] = useState(null);
  
  // Display preferences state
  const [displayPrefs, setDisplayPrefs] = useState({
    accSpectrumType: 'Peak-Peak',
    accUnit: 'g',
    velSpectrumType: 'RMS',
    velUnit: 'mm/s',
    dispSpectrumType: 'Peak-Peak',
    dispUnit: 'µm',
    currentSpectrumType: 'RMS',
    currentUnit: 'A',
    spectrumYAxisType: 'Linear',
    spectrumXAxisType: 'Linear',
    frequencyUnit: 'Hz'
  });
  
  const [readings, setReadings] = useState({
    acc: 0.0059,
    vel: 0.0274,
    disp: 0.2546,
    rpm: 1.0
  });

  // All available options for each preference
  const options = {
    accSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'adB (SI)', 'adB (US)'],
    accUnit: ['g', 'm/s^2', 'cm/s^2', 'mm/s^2', 'μg', 'ft/s^2', 'in/s^2', 'mil/s^2', 'Gal'],
    velSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'vdB (SI)', 'vdB (US)'],
    velUnit: ['m/s', 'cm/s', 'mm/s', 'μm/s', 'ft/s', 'in/s', 'mil/s'],
    dispSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'dB'],
    dispUnit: ['m', 'cm', 'mm', 'μm', 'ft', 'in', 'mil'],
    currentSpectrumType: ['RMS', 'Peak', 'Peak-Peak', 'dB'],
    currentUnit: ['A', 'mA'],
    spectrumYAxisType: ['Linear', 'Log', 'dB'],
    spectrumXAxisType: ['Linear', 'Log'],
    frequencyUnit: ['Hz', 'RPM', 'Orders']
  };

  // Display names for menu items
  const displayNames = {
    accSpectrumType: 'Acceleration Spectrum Type',
    accUnit: 'Acceleration Engineering Unit',
    velSpectrumType: 'Velocity Spectrum Type',
    velUnit: 'Velocity Engineering Unit',
    dispSpectrumType: 'Displacement Spectrum Type',
    dispUnit: 'Displacement Engineering Unit',
    currentSpectrumType: 'Current Spectrum Type',
    currentUnit: 'Current Engineering Unit',
    spectrumYAxisType: 'Spectrum Y Axis Type',
    spectrumXAxisType: 'Spectrum X Axis Type',
    frequencyUnit: 'Frequency Hz/RPM/Orders'
  };

  // Main menu definitions
  const mainMenus = {
    traces: [
      "Window and Trace Menu",
      "Readings+Waveform",
      "Readings+Spectrum",
      "Waveform+Spectrum",
      "Readings+Readings",
      "Waveform+Waveform",
      "Spectrum+Spectrum",
      "Trace and Window Settings"
    ],
    param: [
      "Parameter",
      "Analysis Parameters",
      "Input Channels",
      "Output Channels",
      "Tachometer",
      { name: "Display Preferences", type: "submenu", target: "displayPrefs" },
      "Hold Live Signals"
    ],
    control: [
      "Control",
      "Review Measure Record"
    ],
    auto: [
      "Scale",
      "Top Trace",
      "Bottom Trace"
    ],
    cursor: [
      "Cursor Setup",
      "Add Cursor X1 to Top Trace",
      "Add Cursor X2 to Top Trace",
      "Add Cursor X1 to Bottom Trace",
      "Add Cursor X2 to Bottom Trace",
      "Set Top Trace Cursor Value",
      "Set Bottom Trace Cursor Value"
    ],
    startMeas: [
      "Single",
      "Continuous"
    ]
  };

  // Toggle main dropdown menus
  const toggleDropdown = (buttonName) => {
    if (activeDropdown === buttonName) {
      // Close dropdown
      setActiveDropdown(null);
      setNavigationStack([]);
      setCurrentView(null);
    } else {
      // Open dropdown
      setActiveDropdown(buttonName);
      setNavigationStack([]);
      setCurrentView({ type: 'main', name: buttonName });
    }
  };
  
  // Navigate to submenu
  const navigateToSubMenu = (menuName) => {
    // Push current view to stack
    setNavigationStack([...navigationStack, currentView]);
    setCurrentView({ type: 'submenu', name: menuName });
  };
  
  // Navigate to options menu
  const navigateToOptions = (prefName) => {
    // Push current view to stack
    setNavigationStack([...navigationStack, currentView]);
    setCurrentView({ type: 'options', name: prefName });
  };
  
  // Handle option selection
  const handleOptionSelect = (prefName, value) => {
    setDisplayPrefs(prev => ({
      ...prev,
      [prefName]: value
    }));
    
    // Go back to previous view
    goBack();
  };
  
  // Go back to previous view
  const goBack = () => {
    if (navigationStack.length > 0) {
      const prevView = navigationStack[navigationStack.length - 1];
      setCurrentView(prevView);
      setNavigationStack(navigationStack.slice(0, -1));
    } else {
      // Close dropdown if already at main level
      setActiveDropdown(null);
      setCurrentView(null);
    }
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.button')) {
      setActiveDropdown(null);
      setNavigationStack([]);
      setCurrentView(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Get abbreviated display name for spectrum type
  const getSpectrumTypeAbbreviation = (type) => {
    switch (type) {
      case 'RMS': return 'rms';
      case 'Peak': return 'pk';
      case 'Peak-Peak': return 'pk-pk';
      default: return type.toLowerCase();
    }
  };

  // Render current dropdown content based on navigation state
  const renderDropdownContent = () => {
    if (!currentView) return null;

    // Generate breadcrumb text
    const breadcrumb = navigationStack.map(item => 
      item.type === 'main' ? item.name : 
      item.type === 'submenu' ? 'Display Preferences' : 
      displayNames[item.name]
    ).join(' > ');

    // Render based on current view type
    switch (currentView.type) {
      case 'main':
        return (
          <div className="dropdown">
            {navigationStack.length > 0 && (
              <div className="back-button" onClick={goBack}>← Back</div>
            )}
            {breadcrumb && <div className="dropdown-breadcrumb">{breadcrumb}</div>}
            {mainMenus[currentView.name].map((item, index) => 
              typeof item === 'string' ? (
                <div key={index}>{item}</div>
              ) : (
                <div 
                  key={index} 
                  className="sub-menu-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToSubMenu(item.target);
                  }}
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        );
        
      case 'submenu':
        if (currentView.name === 'displayPrefs') {
          return (
            <div className="dropdown">
              <div className="back-button" onClick={goBack}>← Back</div>
              {breadcrumb && <div className="dropdown-breadcrumb">{breadcrumb}</div>}
              {Object.keys(displayNames).map(prefKey => (
                <div 
                  key={prefKey}
                  className="sub-menu-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToOptions(prefKey);
                  }}
                >
                  {displayNames[prefKey]}
                </div>
              ))}
            </div>
          );
        }
        return null;
        
      case 'options':
        return (
          <div className="dropdown">
            <div className="back-button" onClick={goBack}>← Back</div>
            {breadcrumb && <div className="dropdown-breadcrumb">{breadcrumb}</div>}
            {options[currentView.name].map((option, index) => (
              <div 
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionSelect(currentView.name, option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="header">Waveform & Spectrum</div>

      <div className="readings">
        <div className="reading-item">
          Acc: <span>{readings.acc.toFixed(4)}</span> {displayPrefs.accUnit} ({getSpectrumTypeAbbreviation(displayPrefs.accSpectrumType)})
        </div>
        <div className="reading-item">
          Vel: <span>{readings.vel.toFixed(4)}</span> {displayPrefs.velUnit} ({getSpectrumTypeAbbreviation(displayPrefs.velSpectrumType)})
        </div>
        <div className="reading-item">
          Disp: <span>{readings.disp.toFixed(4)}</span> {displayPrefs.dispUnit} ({getSpectrumTypeAbbreviation(displayPrefs.dispSpectrumType)})
        </div>
        <div className="reading-item">
          RPM: <span>{readings.rpm.toFixed(1)}</span> (Expected)
        </div>
      </div>
      
      <div className="spectrum"></div>
      
      <div className="buttons">
        {Object.keys(mainMenus).map(menuName => (
          <div 
            key={menuName}
            className={`button ${activeDropdown === menuName ? 'active' : ''}`} 
            onClick={() => toggleDropdown(menuName)}
          >
            {menuName.charAt(0).toUpperCase() + menuName.slice(1).replace(/([A-Z])/g, ' $1')}
            {activeDropdown === menuName && renderDropdownContent()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaveformSpectrum;