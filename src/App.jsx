import React, { useState } from "react";
import Notifications from "./components/Notifications";
import "./App.css";


function App() {
  const [isDark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!isDark);
  }
  return (
    <main>
      <div className={`outer-container ${isDark ? "body-bg-dark" : ""}`}>
        <div className="inner-container">
          <Notifications isDark={isDark} />
          <div className="icons-container" onClick={toggleTheme}>
            {/* <p className="dark-mode-text">Switch</p> */}
            {/* <img
              src={isDark ? lightIcon : darkIcon}
              alt={`${isDark ? "light Icon" : "dark Icon"}`}
             
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;