import React from "react";
import NamePopup from "./NamePopup";

const ModalBase = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-modal">
        <NamePopup/>
    </div>
  );
};

export default ModalBase;
