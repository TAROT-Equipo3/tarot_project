import React from "react";

const ModalBase = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-modal">
      {children}
    </div>
  );
};

export default ModalBase;
