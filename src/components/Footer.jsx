import React from 'react'

const Footer = () => {
  return (
    <footer className="
      w-full 
      py-3 
      text-center 
      mt-auto

      border-t border-[var(--gold)]
      bg-[linear-gradient(180deg,var(--purple-dark)_0%,var(--purple-light)_100%)]
    ">
      <p className="
        font-['Space_Mono']
        font-normal

        text-[var(--gold)]
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