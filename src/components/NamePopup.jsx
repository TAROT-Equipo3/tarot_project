import React, {useState} from "react";

const NamePopup = ({onSubmitName}) => {
  const [localName, setLocalName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localName.trim() !== "") {
      onSubmitName(localName); // Envia el nombre al padre (Home.jsx)
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-modal backdrop-blur-sm-">
      <div className="p-8 max-w-sm w-full mx-4 text-center rounded-xl bg-pink-100 border-solid ">
        <h2>¿QUIÉN ME PREGUNTA?</h2>
        <form>
          <input type="text" placeholder="PON TU FIRMA CÓSMICA" required />
          <button type="submit" aria-label="Escribir nombre y comenzar lectura">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="fill-goldDark"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.44258 7.66401C7.06925 7.09601 5.69591 8.47335 6.26658 9.84535L8.53591 15.0853L18.5106 15.852C18.6746 15.8653 18.6746 16.1053 18.5106 16.1187L8.53325 16.8853L6.26658 22.0973C5.69458 23.4693 7.06925 24.8467 8.44258 24.2787L24.7959 17.5107C26.1692 16.9427 26.1692 14.9987 24.7959 14.4307L8.44258 7.66401Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NamePopup;
