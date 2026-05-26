export const CurvedText = ({ text }) => {
  return (
    <svg
      viewBox="0 0 500 80"
      className="w-full max-w-[500px] mt-2 "
      style={{ marginTop: "-100px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="curva" d="M 50,70 Q 250,-30 450,70" />
      </defs>
      <text className="font-mono text-md fill-white tracking-wider md:hidden">
        <textPath href="#curva" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};
