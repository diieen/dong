import React from "react";

const InstagramIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24" height="24" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_6_103" transform="scale(0.0416667)" />
        </pattern>
        <image
          id="image0_6_103"
          width="24"
          height="24"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default InstagramIcon;
