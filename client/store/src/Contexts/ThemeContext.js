import { createContext, useState, useEffect, useContext } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get saved theme from localStorage or default to light
  const getInitialTheme = () => localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(getInitialTheme);

  // Update the theme and save it to localStorage when it changes
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
