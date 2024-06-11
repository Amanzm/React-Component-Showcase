import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTog = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="container  mt-3 py-4 text-center ">
      <div className="d-flex p-5 justify-content-center ">
        <button className="btn btn-outline-primary" onClick={handleTog}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Theme;
