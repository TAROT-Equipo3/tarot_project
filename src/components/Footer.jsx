const Footer = () => {
  return (
    <footer
      className="
        w-full
        mt-auto
        pt-5
        pb-4
        px-4
        text-center
        bg-footer-gradient
      "
    >
      <h2
        className="
          font-syne
          font-extrabold
          text-accent
          text-[26px]
          sm:text-[32px]
          md:text-[42px]
          leading-none
          tracking-[0.02em]
        "
      >
        ASTRALIS
      </h2>

      <p
        className="
          mt-3
          font-mono
          font-normal

          text-accent
          text-[7px]
          sm:text-[8px]
          md:text-[10px]

          tracking-[0.22em]
          opacity-80
        "
      >
        ©2026 ASTRALIS ARCANA, BOOTCAMP FACTORIA F5.
      </p>
    </footer>
  );
};

export default Footer;