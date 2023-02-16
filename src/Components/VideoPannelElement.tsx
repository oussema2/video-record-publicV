import React, { FC, ReactNode } from "react";
import { RecorderInstance } from "../MobX/RecorderInstance";

export interface VideoPannelElementProps {
  icon?: ReactNode;
  text?: string;
  onClick?: () => void;
  effect?: {};
  isBar: boolean;
}

const VideoPannelElement: FC<VideoPannelElementProps> = ({
  effect,
  icon,
  onClick,
  text,
  isBar,
}) => {
  if (isBar) {
    return <div className="bar-element"></div>;
  }
  return (
    <div className="video-panne-element">
      <div
        onClick={onClick}
        className={
          text === "Audio" || text === "Camera"
            ? "video-pannel-element-icon-audio-camera"
            : "video-pannel-element-icon"
        }
      >
        {!RecorderInstance.sound && text === "Audio" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="-7 -7 40 40"
          >
            <g
              clipPath="url(#8fe9de5c-7447-46cb-9297-b20f1ba61a88)"
              filter="url(#5f6a9f30-a9d7-463c-b943-7801faf892cc)"
            >
              <g filter="url(#44179e99-0b1e-453b-97da-e018dcf0b8da)">
                <path
                  fill="#FF5454"
                  d="M4.04 8C3.464 8 3 8.465 3 9.04v4.89a5.5 5.5 0 005.5 5.5v1.07a3.5 3.5 0 107 0v-1.07a5.5 5.5 0 005.5-5.5V9.04A1.04 1.04 0 0019.961 8H4.04z"
                ></path>
              </g>
              <g filter="url(#132533cf-484d-4a44-9eef-ea28da9fd482)">
                <rect width="8" height="16" x="8" fill="#FFFFFF" rx="4"></rect>
              </g>
            </g>
            <path
              fill="#FFCDCD"
              d="M28 0l4 4L4 32l-4-4L28 0z"
              transform="translate(-8,0)"
            ></path>
            <defs>
              <filter
                id="5f6a9f30-a9d7-463c-b943-7801faf892cc"
                width="24"
                height="24"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect1_innerShadow_24257_159040"
                ></feBlend>
              </filter>
              <filter
                id="44179e99-0b1e-453b-97da-e018dcf0b8da"
                width="18"
                height="16.001"
                x="3"
                y="8"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect1_innerShadow_24257_159040"
                ></feBlend>
              </filter>
              <filter
                id="132533cf-484d-4a44-9eef-ea28da9fd482"
                width="12"
                height="20"
                x="6"
                y="-1"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="1"></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  mode="multiply"
                  result="effect1_dropShadow_24257_159040"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_24257_159040"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect2_innerShadow_24257_159040"
                ></feBlend>
              </filter>
              <clipPath id="8fe9de5c-7447-46cb-9297-b20f1ba61a88">
                <path fill="#fff" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
        ) : (
          icon
        )}
      </div>
      <div>
        <p className="video-pannel-element-label">{text}</p>
      </div>
    </div>
  );
};

export default VideoPannelElement;
