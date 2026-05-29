import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto pt-5 pb-4 px-4 text-center bg-footer-gradient">
      <h2 className="
        font-syne font-extrabold text-accent leading-none tracking-[0.02em]
        text-[26px] sm:text-[32px] md:text-[42px]
      ">
        ASTRALIS
      </h2>

      <p className="
        font-['Space_Mono']
        font-normal

        text-yellow-400
        text-[9px] md:text-[11px]

        tracking-[0.3em]

        opacity-80
      ">
        ©2026 ASTRALIS ARCANA, BOOTCAMP FACTORIA F5.
      </p>
    </footer>
  );
};

export default Footer;