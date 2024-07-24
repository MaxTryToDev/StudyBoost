import * as React from "react"

interface SvgProp extends React.ComponentProps<"svg">{
  size?: number
}

export function FolderIllustration(props: SvgProp) {
  const {size=128, ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_224_423)">
        <path
          d="M62.471 12.593V8.506a2.795 2.795 0 00-2.786-2.786H17.981a2.795 2.795 0 00-2.786 2.786v4.087h-4.41c-.97 0-2.623 1.254-2.65 2.787l.188 78.112a2.74 2.74 0 002.738 2.79H117.53a2.747 2.747 0 002.751-2.78l-.418-78.123a2.836 2.836 0 00-2.821-2.786h-54.57z"
          fill="url(#paint0_linear_224_423)"
        />
        <path
          d="M114.224 95.08H13.774l-.278-79.116h101.007l-.279 79.115z"
          fill="url(#paint1_linear_224_423)"
        />
        <path
          d="M114.224 95.08H13.774l-1.95-75.493h104.351l-1.951 75.492z"
          fill="url(#paint2_linear_224_423)"
        />
        <path
          d="M120.149 93.501a2.845 2.845 0 01-2.834 2.78H10.846c-1.532-.004-2.97-1.443-2.997-2.975L5.484 26.34a2.737 2.737 0 012.738-2.786h111.555a2.736 2.736 0 012.737 2.787L120.149 93.5z"
          fill="url(#paint3_linear_224_423)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_224_423"
          x1={64.2089}
          y1={5.71997}
          x2={64.2089}
          y2={236.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E94FF" />
          <stop offset={0.153} stopColor="#0057FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_224_423"
          x1={63.9997}
          y1={95.0793}
          x2={63.9997}
          y2={15.9644}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E6E6" />
          <stop offset={0.633} stopColor="#E8E8E8" />
          <stop offset={0.949} stopColor="#F0F0F0" />
          <stop offset={1} stopColor="#F2F2F2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_224_423"
          x1={63.9997}
          y1={95.0793}
          x2={63.9997}
          y2={19.5868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCC" />
          <stop offset={0.427} stopColor="#CECECE" />
          <stop offset={0.64} stopColor="#D6D6D6" />
          <stop offset={0.806} stopColor="#E3E3E3" />
          <stop offset={0.947} stopColor="#F6F6F6" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_224_423"
          x1={63.9993}
          y1={23.5531}
          x2={63.9993}
          y2={96.2811}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BA2FF" />
          <stop offset={0.595} stopColor="#2287FF" />
          <stop offset={0.957} stopColor="#2A8FFF" />
          <stop offset={1} stopColor="#0057FF" />
        </linearGradient>
        <clipPath id="clip0_224_423">
          <path
            fill="#fff"
            transform="translate(5.484 5.72)"
            d="M0 0H117.031V90.56H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

