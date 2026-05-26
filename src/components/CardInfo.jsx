import React, { useState } from "react";

const CardInfo = ({ cardData }) => {
  const [avatarError, setAvatarError] = useState(false);
  const FALLBACK = "https://unsplash.com";

  if (!cardData) return null;

  const stemName = cardData.goddessName;
  const stemBio = cardData.goddessDescription;
  const stemImage = cardData.goddessImage?.imageSrc;

  return (
    <div className="w-full flex flex-col items-center gap-6 mt-12 font-mono text-white">
      <h4 className="text-accent font-syne font-bold tracking-widest text-base uppercase  text-center px-4">
        MUJER STEM: {stemName}
      </h4>

      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-card-selected bg-cardOuter flex-shrink-0 my-2 relative">
        <img
          src={avatarError || !stemImage ? FALLBACK : stemImage}
          alt=""
          className="w-full h-full object-cover"
          onError={() => setAvatarError(true)}
        />
      </div>

      <p className="text-purple-100 leading-relaxed text-lg font-syne text-justify w-full max-w-2xl px-4 md:px-0">
        {stemBio}
      </p>
    </div>
  );
};

export default CardInfo;
