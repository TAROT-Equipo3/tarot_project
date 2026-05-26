export const CurvedText = ({ text }) => {
  return (
    <svg
      viewBox="0 0 500 80"
      className="w-full max-w-[500px] mt-2"
      style={{ marginTop: "-100px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="curva" d="M 50,60 Q 250,0 450,60" />
      </defs>
      <text
        fill="var(--color-accent)"
        fontSize="16"
        letterSpacing="3"
      >
        <textPath href="#curva" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};