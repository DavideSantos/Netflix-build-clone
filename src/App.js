import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { initializeApp } from "firebase/app";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
