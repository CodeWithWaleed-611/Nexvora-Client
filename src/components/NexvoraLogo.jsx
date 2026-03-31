export default function NexvoraLogo({ size = 42, color = "#FF5A3C" }) {
  return (
    <div className="flex items-center gap-2">
      {/* ICON */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer house shape */}
        <path
          d="M10 28L32 10L54 28V52C54 54.2 52.2 56 50 56H14C11.8 56 10 54.2 10 52V28Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Forward arrow / Next-direction mark */}
        <path
          d="M26 36L34 44L46 32"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle checkmark for trust */}
        <path
          d="M20 40L24 44L30 38"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* TEXT */}
      <span className="text-2xl font-bold tracking-wide text-white">
        Nex
        <span className="text-[#FF5A3C]">vora</span>
      </span>
    </div>
  );
}