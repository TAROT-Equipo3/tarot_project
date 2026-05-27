const Header = () => {
  return (
    <header className="w-full overflow-hidden">
      <div
        className="
          w-full
          py-3
          md:py-5
          flex
          justify-center
          items-center
          bg-header-gradient
        "
      >
        <h2
          className="
            font-syne
            font-extrabold
            text-accent

            text-[28px]
            sm:text-[36px]
            md:text-[48px]
            lg:text-[56px]

            tracking-[0.01em]
            md:tracking-[0.02em]

            leading-none
            text-center
            whitespace-nowrap

          "
        >
          ASTRALIS
        </h2>
      </div>

      <div className="h-[1px] bg-accent w-full opacity-80" />
    </header>
  );
};

export default Header;