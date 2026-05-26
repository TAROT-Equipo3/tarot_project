//import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
// import { TarotProvider } from './context/TarotContext'; // Cuando lo uses, envuelve todo aquí

function App() {
  return (
    // <TarotProvider>
      <div className="app-container">
        {/* Outlet renderizará Home, Historial, Past, etc., dependiendo de la URL */}
        <Outlet /> 
        
      </div>
    // </TarotProvider>
  );
}

export default App;
