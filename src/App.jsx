import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-purple-800 text-white">
      
      <Header />

   

      <Footer />

    </div>
  );
}

export default App;