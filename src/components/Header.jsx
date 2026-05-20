const Header = () => {
  return (
    <header className="w-full overflow-hidden">

      {/* Background */}
      <div className="
        w-full 
        bg-gradient-to-b 
        from-purple-500 
        via-purple-700 
        to-purple-900 
        py-3 md:py-5 
        flex 
        justify-center
      ">

        <h1 className="
          font-[Syne]
          font-extrabold
          text-yellow-400

          text-[28px] 
          sm:text-[36px] 
          md:text-[48px] 
          lg:text-[56px]

          tracking-[0.01em] 
          md:tracking-[0.02em]

          leading-none
          text-center
          whitespace-nowrap
        ">
          ASTRALIS
        </h1>

      </div>

      {/* Line */}
      <div className="h-[2px] bg-yellow-400 w-full"></div>

    </header>
  );
};

export default Header;
