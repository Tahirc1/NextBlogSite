"use client";
import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setMode(stored ? stored : "light");
  }, []);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", mode == "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
