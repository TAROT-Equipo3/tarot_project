import { Link } from "react-router-dom";

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
        <Link to="/" aria-label="Go to home">
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
              cursor-pointer
            "
          >
            ASTRALIS
          </h2>
        </Link>
      </div>

      <div className="h-[1px] bg-accent w-full opacity-80" />
    </header>
  );
};

export default Header;