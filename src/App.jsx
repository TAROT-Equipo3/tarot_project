//import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { TarotProvider } from './context/TarotContext'; 

function App() {
  return (
    <TarotProvider>
      <div className="app-container">
        <Outlet /> 
      </div>
    </TarotProvider>
  );
}

export default App;