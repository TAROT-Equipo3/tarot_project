const Button = ({
  children,
  variant = "outline",
  onClick,
  className = "",
}) => {

  const base = `
    font-['Space_Mono']
    uppercase
    tracking-[0.2em]

    px-6 md:px-8
    py-3 md:py-4

    rounded-full
    transition-all duration-300
    cursor-pointer
  `;

  const variants = {

    outline: `
      border-2 border-[#FFD700]
      text-[#FFD700]
      bg-transparent

      hover:shadow-[0_0_15px_#FCDD4D]
      [text-shadow:0_0_10px_#FFD700]
    `,

    primary: `
      bg-[#FFD700]
      text-[#240F42]
      border-2 border-[#FFD700]

      hover:shadow-[0_0_15px_#FCDD4D]
    `
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;