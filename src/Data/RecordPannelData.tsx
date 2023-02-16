import { VideoPannelElementProps } from "../Components/VideoPannelElement";
import { RecorderInstance } from "../MobX/RecorderInstance";

export const RecordPannelData: VideoPannelElementProps[] = [
  {
    text: "Camera",
    effect: () => {},
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#0098FD"></circle>
        <g filter="url(#910056ee-afd1-4732-9bdd-ed9d0138d083)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.173 11.2H26a4 4 0 014 4V25a4 4 0 01-4 4H14a4 4 0 01-4-4v-9.8a4 4 0 014-4h.827A4 4 0 0118.4 9h3.2a4 4 0 013.573 2.2z"
            fill="#7ECBFE"
          ></path>
          <g filter="url(#92066950-7afb-4d94-91ee-3d83345ac39e)">
            <path d="M20 25a5 5 0 100-10 5 5 0 000 10z" fill="#fff"></path>
          </g>
        </g>
        <defs>
          <filter
            id="910056ee-afd1-4732-9bdd-ed9d0138d083"
            x="6"
            y="8"
            width="28"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83576"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_15683_83576"
              result="effect2_dropShadow_15683_83576"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_15683_83576"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect3_innerShadow_15683_83576"
            ></feBlend>
          </filter>
          <filter
            id="92066950-7afb-4d94-91ee-3d83345ac39e"
            x="13"
            y="14"
            width="14"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83576"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83576"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    text: "Audio",
    effect: () => {},
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#0098FD"></circle>
        <g filter="url(#8ef40cb2-4efb-4ba6-91e8-989ec38d1d6d)">
          <g filter="url(#e7b8016c-9958-42f5-9fa1-6469e70c6541)">
            <path
              d="M12.125 16c-.753 0-1.125.332-1.125 1.071v2.143c0 3.653 2.25 7.5 6.75 7.5v2.036a2.25 2.25 0 004.5 0v-2.036c4.5 0 6.75-3.847 6.75-7.5v-2.143c0-.74-.372-1.071-1.125-1.071h-15.75z"
              fill="#7ECBFE"
            ></path>
          </g>
          <g filter="url(#1cfd2ab5-9afd-4fb2-8bc2-e19390a73b48)">
            <path
              d="M17.172 9.063C17.922 8.383 18.939 8 20 8c1.06 0 2.078.382 2.828 1.063.75.68 1.172 1.604 1.172 2.566v7.742c0 .962-.421 1.886-1.172 2.566C22.078 22.617 21.061 23 20 23c-1.06 0-2.078-.382-2.828-1.063-.75-.68-1.172-1.604-1.172-2.566v-7.742c0-.962.421-1.886 1.172-2.566z"
              fill="#fff"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id="8ef40cb2-4efb-4ba6-91e8-989ec38d1d6d"
            x="4"
            y="6"
            width="32"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83604"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_15683_83604"
              result="effect2_dropShadow_15683_83604"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_15683_83604"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect3_innerShadow_15683_83604"
            ></feBlend>
          </filter>
          <filter
            id="e7b8016c-9958-42f5-9fa1-6469e70c6541"
            x="11"
            y="16"
            width="18"
            height="15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_15683_83604"
            ></feBlend>
          </filter>
          <filter
            id="1cfd2ab5-9afd-4fb2-8bc2-e19390a73b48"
            x="14"
            y="7"
            width="12"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83604"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83604"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect2_innerShadow_15683_83604"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      RecorderInstance.muteUnmute();
    },
    isBar: false,
  },
  {
    isBar: true,
  },
  {
    text: "Screen",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#96e0718d-bb63-4143-a06d-8604208cf8d9)">
          <rect x="8" y="9" width="24" height="20" rx="6" fill="#A0A4B2"></rect>
        </g>
        <g filter="url(#841288e4-bced-40d3-88cc-31f49728ec55)">
          <path
            d="M23.821 17.327l-2.808-2.708c-.355-.342-.532-.513-.736-.577a.927.927 0 00-.554 0c-.204.064-.381.235-.736.577l-2.808 2.708c-.767.74-1.15 1.11-1.176 1.427a.848.848 0 00.31.724c.252.206.794.206 1.879.206h1.018v2.526a1.79 1.79 0 003.58 0v-2.526h1.018c1.085 0 1.627 0 1.878-.206a.848.848 0 00.311-.724c-.026-.318-.41-.688-1.176-1.427z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <filter
            id="96e0718d-bb63-4143-a06d-8604208cf8d9"
            x="4"
            y="8"
            width="32"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83739"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_15683_83739"
              result="effect2_dropShadow_15683_83739"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_15683_83739"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect3_innerShadow_15683_83739"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy=".5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="effect3_innerShadow_15683_83739"
              result="effect4_innerShadow_15683_83739"
            ></feBlend>
          </filter>
          <filter
            id="841288e4-bced-40d3-88cc-31f49728ec55"
            x="13"
            y="13"
            width="14"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83739"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83739"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    text: "Slides",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_15683_83798)">
          <g filter="url(#filter0_ddi_15683_83798)">
            <path
              d="M11 10a3 3 0 00-3 3v10a3 3 0 003 3h5.672l-2.586 2.586a2 2 0 102.828 2.828L20 28.328l3.086 3.086a2 2 0 102.828-2.828L23.328 26H29a3 3 0 003-3V13a3 3 0 00-3-3H11z"
              fill="#A0A4B2"
            ></path>
          </g>
          <g filter="url(#filter1_d_15683_83798)">
            <rect
              x="12"
              y="17"
              width="4"
              height="6"
              rx="2"
              fill="currentColor"
            ></rect>
          </g>
          <g filter="url(#filter2_d_15683_83798)">
            <rect
              x="18"
              y="15"
              width="4"
              height="8"
              rx="2"
              fill="currentColor"
            ></rect>
          </g>
          <g filter="url(#filter3_d_15683_83798)">
            <rect
              x="24"
              y="13"
              width="4"
              height="10"
              rx="2"
              fill="currentColor"
            ></rect>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_ddi_15683_83798"
            x="4"
            y="9"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83798"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_15683_83798"
              result="effect2_dropShadow_15683_83798"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_15683_83798"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="0.5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect3_innerShadow_15683_83798"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_15683_83798"
            x="10"
            y="16"
            width="8"
            height="10"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83798"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83798"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter2_d_15683_83798"
            x="16"
            y="14"
            width="8"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83798"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83798"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter3_d_15683_83798"
            x="22"
            y="12"
            width="8"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83798"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83798"
              result="shape"
            ></feBlend>
          </filter>
          <clipPath id="clip0_15683_83798">
            <path fill="#fff" d="M0 0h40v40H0z"></path>
          </clipPath>
        </defs>
      </svg>
    ),

    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    isBar: true,
  },
  {
    text: "Themes",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddi_15683_83754)">
          <path
            d="M8 16.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C12.56 7 14.24 7 17.6 7h4.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C32 11.56 32 13.24 32 16.6v4.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C27.44 31 25.76 31 22.4 31h-4.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C8 26.44 8 24.76 8 21.4v-4.8z"
            fill="#A0A4B2"
          ></path>
        </g>
        <g filter="url(#filter1_d_15683_83754)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 23a2 2 0 002 2h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8zm11-1a2 2 0 002 2h1a2 2 0 002-2v-5a2 2 0 00-2-2h-1a2 2 0 00-2 2v5zm-15 2a2 2 0 01-2-2v-5a2 2 0 012-2h1a2 2 0 012 2v5a2 2 0 01-2 2h-1z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_ddi_15683_83754"
            x="4"
            y="6"
            width="32"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83754"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_15683_83754"
              result="effect2_dropShadow_15683_83754"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_15683_83754"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="0.5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect3_innerShadow_15683_83754"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_15683_83754"
            x="7"
            y="12"
            width="26"
            height="16"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83754"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83754"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    text: "Size",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_24456_159229)">
          <g filter="url(#filter0_ddi_24456_159229)">
            <path
              d="M8 17.6C8 14.2397 8 12.5595 8.65396 11.2761C9.2292 10.1471 10.1471 9.2292 11.2761 8.65396C12.5595 8 14.2397 8 17.6 8H22.4C25.7603 8 27.4405 8 28.7239 8.65396C29.8529 9.2292 30.7708 10.1471 31.346 11.2761C32 12.5595 32 14.2397 32 17.6V22.4C32 25.7603 32 27.4405 31.346 28.7239C30.7708 29.8529 29.8529 30.7708 28.7239 31.346C27.4405 32 25.7603 32 22.4 32H17.6C14.2397 32 12.5595 32 11.2761 31.346C10.1471 30.7708 9.2292 29.8529 8.65396 28.7239C8 27.4405 8 25.7603 8 22.4V17.6Z"
              fill="#A0A4B2"
            ></path>
          </g>
          <g filter="url(#filter1_d_24456_159229)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 18.9436V14.1087C28 12.9441 27.0559 12 25.8913 12H21.0564C20.1171 12 19.6467 13.1357 20.3109 13.7998L22.1949 15.6838L15.6838 22.1949L13.7998 20.3109C13.1357 19.6467 12 20.1171 12 21.0564V25.8913C12 27.0559 12.9441 28 14.1086 28H18.9436C19.8829 28 20.3533 26.8643 19.6891 26.2002L17.8051 24.3162L24.3162 17.8051L26.2002 19.6891C26.8643 20.3533 28 19.8829 28 18.9436Z"
              fill="currentColor"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_ddi_24456_159229"
            x="4"
            y="7"
            width="32"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            ></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24456_159229"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            ></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_24456_159229"
              result="effect2_dropShadow_24456_159229"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_24456_159229"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="0.5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_24456_159229"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_24456_159229"
            x="9"
            y="10.5"
            width="22"
            height="22"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1.5"></feOffset>
            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            ></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24456_159229"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24456_159229"
              result="shape"
            ></feBlend>
          </filter>
          <clipPath id="clip0_24456_159229">
            <rect width="40" height="40" rx="20" fill="currentColor"></rect>
          </clipPath>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    text: "Background",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 17.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C12.56 8 14.24 8 17.6 8h4.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C32 12.56 32 14.24 32 17.6v4.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C27.44 32 25.76 32 22.4 32h-4.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C8 27.44 8 25.76 8 22.4v-4.8z"
          fill="#A0A4B2"
        ></path>
        <g filter="url(#filter0_d_15683_83556)">
          <rect
            x="12"
            y="12"
            width="7"
            height="7"
            rx="3.5"
            fill="currentColor"
          ></rect>
        </g>
        <g filter="url(#filter1_d_15683_83556)">
          <path
            d="M27.596 25.594c.46.789.69 1.183.658 1.507a1 1 0 01-.406.707c-.263.192-.72.192-1.634.192h-8.428c-.914 0-1.37 0-1.634-.192a1 1 0 01-.406-.707c-.033-.324.197-.718.658-1.507l4.214-7.225c.454-.778.681-1.168.977-1.299a1 1 0 01.81 0c.296.131.523.52.977 1.3l4.214 7.224z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_d_15683_83556"
            x="9"
            y="10.5"
            width="13"
            height="13"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1.5"></feOffset>
            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83556"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83556"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_15683_83556"
            x="12.742"
            y="15.485"
            width="18.516"
            height="17.015"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1.5"></feOffset>
            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83556"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83556"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    text: "Prompter",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddi_18823_83751)">
          <path
            d="M8 17.6C8 14.2397 8 12.5595 8.65396 11.2761C9.2292 10.1471 10.1471 9.2292 11.2761 8.65396C12.5595 8 14.2397 8 17.6 8H22.4C25.7603 8 27.4405 8 28.7239 8.65396C29.8529 9.2292 30.7708 10.1471 31.346 11.2761C32 12.5595 32 14.2397 32 17.6V21.0236C32 22.4911 32 23.2249 31.8342 23.9154C31.6872 24.5276 31.4448 25.1129 31.1158 25.6497C30.7448 26.2552 30.2259 26.7741 29.1882 27.8118L27.8118 29.1882C26.7741 30.2259 26.2552 30.7448 25.6497 31.1158C25.1129 31.4448 24.5276 31.6872 23.9154 31.8342C23.2249 32 22.4911 32 21.0236 32H17.6C14.2397 32 12.5595 32 11.2761 31.346C10.1471 30.7708 9.2292 29.8529 8.65396 28.7239C8 27.4405 8 25.7603 8 22.4V17.6Z"
            fill="#A0A4B2"
          ></path>
        </g>
        <path
          d="M28.5858 22H23C22.4477 22 22 22.4477 22 23V28.5858C22 29.4767 23.0771 29.9229 23.7071 29.2929L29.2929 23.7071C29.9229 23.0771 29.4767 22 28.5858 22Z"
          fill="currentColor"
        ></path>
        <defs>
          <filter
            id="filter0_ddi_18823_83751"
            x="4"
            y="7"
            width="32"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="3"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            ></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_18823_83751"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="5"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            ></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="effect1_dropShadow_18823_83751"
              result="effect2_dropShadow_18823_83751"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_18823_83751"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="0.5"></feOffset>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_18823_83751"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
  {
    isBar: true,
  },
  {
    text: "Settings",
    effect: () => {},
    icon: (
      <svg
        className="svg-color-inactive pannel-element-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.56 7.154c-1.074.232-2.083.825-4.103 2.01l-.914.537c-2.02 1.186-3.03 1.778-3.763 2.607a7.074 7.074 0 00-1.44 2.537C8 15.907 8 17.093 8 19.463v1.074c0 2.37 0 3.556.34 4.617.3.94.79 1.804 1.44 2.538.734.829 1.743 1.421 3.763 2.607l.914.537c2.02 1.185 3.03 1.778 4.102 2.01.95.205 1.932.205 2.881 0 1.074-.232 2.083-.825 4.103-2.01l.914-.537c2.02-1.186 3.03-1.778 3.764-2.607a7.074 7.074 0 001.44-2.538c.339-1.06.339-2.246.339-4.617v-1.074c0-2.37 0-3.556-.34-4.618a7.074 7.074 0 00-1.44-2.537c-.734-.829-1.743-1.421-3.763-2.607l-.914-.537c-2.02-1.185-3.03-1.778-4.102-2.01a6.816 6.816 0 00-2.881 0z"
          fill="#A0A4B2"
        ></path>
        <g filter="url(#filter0_d_15683_83573)">
          <circle cx="20" cy="20" r="5" fill="currentColor"></circle>
        </g>
        <defs>
          <filter
            id="filter0_d_15683_83573"
            x="13"
            y="14"
            width="14"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15683_83573"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_15683_83573"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    onClick: () => {
      console.log("clicked Camera");
    },
    isBar: false,
  },
];
