import { IconsProps } from '@customTypes/props/icons'

export default function GeneralIcon({ className = "" } : IconsProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_3_125)">
        <path d="M10.6667 10.6667H21.3333V21.3333H10.6667V10.6667Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 5.33333H7.99999C6.52724 5.33333 5.33333 6.52724 5.33333 8V24C5.33333 25.4728 6.52724 26.6667 7.99999 26.6667H24C25.4728 26.6667 26.6667 25.4728 26.6667 24V8C26.6667 6.52724 25.4728 5.33333 24 5.33333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_3_125">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
