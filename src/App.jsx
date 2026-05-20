import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#4b2e2e] flex justify-center">

      {/* MOBILE CONTAINER */}
      <div className="
        w-full 
        max-w-[375px] 
        md:max-w-[768px] 
        lg:max-w-[1200px]   // 👈 AQUI ESTÁ A CORREÇÃO
        bg-purple-800 
        flex flex-col
      ">

        <Header />

        <main className="flex-grow flex items-center justify-center w-full">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;