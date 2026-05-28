//import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
// ✅ CORREGIDO: Un solo punto porque 'context' está al mismo nivel que 'pages' o 'components'
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