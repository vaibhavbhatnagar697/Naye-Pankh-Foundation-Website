import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("Mode")),
  );
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet darkMode={darkMode} />
      <Footer />
    </div>
  );
}
export default App;
