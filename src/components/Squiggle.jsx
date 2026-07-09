export default function Squiggle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M18 4c0 8-14 4-14 12s14 4 14 12" />
    </svg>
  )
}
