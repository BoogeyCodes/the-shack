export default function Logo({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#f4c24a" strokeWidth="3.4" strokeLinecap="round" fill="none">
        <path d="M24 13v17c0 3.2-2 4.5-4 4.5s-4-1.3-4-4.5V13" />
        <path d="M20 13v13" />
        <path d="M20 34.5V52" />
        <path d="M45 13c-5 0-8.5 6.5-8.5 13 0 4.3 3.2 6.4 6.4 6.4L42.4 52" />
      </g>
    </svg>
  )
}
