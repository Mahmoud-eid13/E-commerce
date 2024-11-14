import React from "react";

import "./darkMode.css";

import { LightMode } from "@mui/icons-material";
import { useTheme } from "../../Contexts/ThemeContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  // Import the custom hook

  return (
    <div className="dark_mode">
      <button className="darkButton" onClick={toggleTheme}>
        <LightMode className={theme === "light" ? "loo" : "noo"} />
      </button>
    </div>
  );
};

export default DarkMode;
