import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full overflow-hidden">
      {/* Contenedor Principal con Degradado */}
      <div className="w-full py-3 md:py-5 flex justify-center items-center bg-header-gradient">
        <Link to="/" aria-label="Go to home">
          <h2 className="
            font-syne font-extrabold text-accent leading-none text-center 
            cursor-pointer whitespace-nowrap
            text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]
            tracking-[0.01em] md:tracking-[0.02em]
          ">
            ASTRALIS
          </h2>
        </Link>
      </div>

      {/* Línea divisoria decorativa */}
      <div className="h-[1px] w-full bg-accent opacity-80" />
    </header>
  );
};

export default Header;