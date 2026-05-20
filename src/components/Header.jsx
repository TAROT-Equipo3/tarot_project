const Header = () => {
  return (
    <header className="w-full">
      
      {/* Top gradient */}
      <div className="bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 py-6 shadow-lg">
        
        <h1 className="text-yellow-400 text-3xl md:text-5xl font-extrabold tracking-widest text-center font-[Orbitron]">
          ASTRALIS
        </h1>

      </div>

      {/* Gold line */}
      <div className="h-[2px] w-full bg-yellow-400"></div>

    </header>
  );
};

export default Header;