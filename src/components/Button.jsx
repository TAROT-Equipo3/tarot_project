const Button = ({
  children,
  variant = "outline",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  const base = `
    font-[var(--font-mono)]
    uppercase
    tracking-[0.2em]

    px-6 md:px-8
    py-3 md:py-4

    rounded-full
    transition-all duration-300

    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    outline: `
      border-2 border-[var(--color-accent)]
      text-[var(--color-accent)]
      bg-transparent

      hover:shadow-hover-gold
      text-glow-gold
    `,

    primary: `
      bg-[var(--color-accent)]
      text-[var(--color-border-card-outer)]
      border-2 border-[var(--color-accent)]

      hover:shadow-hover-gold
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.outline} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;