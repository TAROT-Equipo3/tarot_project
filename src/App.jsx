import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importación de las páginas
import Home from "./pages/Home";
import Historial from "./pages/Historial.jsx";
import Past from "./pages/Past";
import Present from "./pages/Present";
import Future from "./pages/Future";

// Aqui va importación de Contexto (si decidimos usarlo para compartir las 3 cartas)
// import { TarotProvider } from './context/TarotContext';

function App() {
  return (
    // <TarotProvider>
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/pasado/:id" element={<Past />} />
          <Route path="/presente/:id" element={<Present />} />
          <Route path="/futuro/:id" element={<Future />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </TarotProvider>
  );
}

export default App;
