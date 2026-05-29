import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "outline",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  className = "",
  icon = null,
  iconPosition = "right",
}) => {
  
  // Estilos base compartidos por todos los botones
  const base = `
    inline-flex items-center justify-center gap-2
    font-mono font-bold uppercase tracking-[0.18em]
    rounded-full transition-all duration-300
    cursor-pointer select-none
    disabled:opacity-50 disabled:cursor-not-allowed
  `.replace(/\s+/g, ' ').trim();

  // Definición de variantes de color y bordes
  const variants = {
    outline: "border border-accent text-accent bg-transparent hover:shadow-hover-gold hover:bg-accent/10",
    primary: "border border-accent bg-accent text-border-card-outer hover:shadow-hover-gold hover:brightness-110",
    dark: "border border-accent bg-gold-dark text-white hover:shadow-hover-gold hover:brightness-110",
    ghost: "border border-transparent bg-transparent text-accent hover:text-white hover:bg-accent/10",
    icon: "border-none bg-transparent text-gold-dark hover:text-accent hover:scale-110",
  };

  // Definición de tamaños y espaciados
  const sizes = {
    xs: "px-4 py-1.5 text-[7px]",
    sm: "px-5 py-2 text-[8px]",
    md: "px-7 py-2.5 text-[9px]",
    lg: "px-9 py-3 text-[10px] sm:text-[11px]",
    icon: "w-8 h-8 p-0 text-lg",
    full: "w-full px-6 py-3 text-[9px]",
  };

  // Combinación final de clases
  const combinedClasses = `
    ${base} 
    ${variants[variant] || variants.outline} 
    ${sizes[size] || sizes.md} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["outline", "primary", "dark", "ghost", "icon"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "icon", "full"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;