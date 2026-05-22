const Header = () => {
  return (
    <header className="w-full overflow-hidden">

      <div className="
        w-full 
        py-3 md:py-5 
        flex 
        justify-center

        bg-[linear-gradient(180deg,var(--purple-dark)_38%,var(--purple-light)_83%)]
      ">

        <h1 className="
          font-[Syne]
          font-extrabold
          text-[var(--gold)]

          text-[28px] 
          sm:text-[36px] 
          md:text-[48px] 
          lg:text-[56px]

          tracking-[0.01em] 
          md:tracking-[0.02em]

          leading-none
          text-center
          whitespace-nowrap

          [text-shadow:0_0_15px_var(--gold)]
        ">
          ASTRALIS
        </h1>

      </div>

      <div className="h-[2px] bg-[var(--gold)] w-full"></div>

    </header>
  );
};

export default Header;