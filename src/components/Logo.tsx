import { useId } from 'react';

export function Logo({
  size = 30,
  withWordmark = true,
  className = '',
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  const gradientId = useId();
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="HealthGraph">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7ff5e0" />
            <stop offset="0.55" stopColor="#5eead4" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill={`url(#${gradientId})`} />
        <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="11.25" stroke="white" strokeOpacity="0.32" strokeWidth="1.5" />
        <path
          d="M7.5 23.2h4.9l3.1-9.4 4.4 14.6 3-8.2h5.6"
          stroke="#06231d"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="23.2" r="1.8" fill="#06231d" />
        <circle cx="32.5" cy="20.2" r="1.8" fill="#06231d" />
      </svg>
      {withWordmark && (
        <span className="text-[15px] font-semibold leading-none tracking-[-0.025em] text-ink">HealthGraph</span>
      )}
    </span>
  );
}
