import React from "react";

export const CardBack = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-full border-2 border-[rgba(108,94,6,0.20)] rounded-lg flex items-center justify-center bg-white">
        <div className="text-[#6C5E06]">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3" />
            <rect x="11" y="2" width="2" height="4" />
            <rect x="11" y="18" width="2" height="4" />
            <rect x="2" y="11" width="4" height="2" />
            <rect x="18" y="11" width="4" height="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
