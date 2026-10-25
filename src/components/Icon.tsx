import type { ReactNode } from 'react';
import type { IconName } from '../content';

const paths: Record<IconName, ReactNode> = {
  pulse: <path d="M3 12h3.6l2.2-5.6 3.7 11.2 2.3-5.6H21" />,
  moon: <path d="M20.6 14.3A8.6 8.6 0 0 1 9.7 3.4 8.6 8.6 0 1 0 20.6 14.3Z" />,
  pill: (
    <>
      <path d="m10.6 20.4 9.8-9.8a4.24 4.24 0 0 0-6-6l-9.8 9.8a4.24 4.24 0 0 0 6 6Z" />
      <path d="m8.6 8.6 6.8 6.8" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="17" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="18" cy="14" r="2" />
      <path d="m7.6 15.6 3-6.6M13.7 8.3l3 4.3M8 17l8-2.5" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9.5 21h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.2c0 4.6 3 8.2 7 9.8 4-1.6 7-5.2 7-9.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  download: <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  trash: <path d="M4 7h16M9 7V5h6v2M6.5 7l1 13h9l1-13M10 11v5M14 11v5" />,
  sparkle: (
    <>
      <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9 12 3.5Z" />
      <path d="m18.6 16.4.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  phone: <path d="M7 3.5 9.5 8 7.8 9.7a12.5 12.5 0 0 0 6.5 6.5l1.7-1.7 4.5 2.5-.6 3a2 2 0 0 1-2.1 1.6A17.5 17.5 0 0 1 2.9 6.2 2 2 0 0 1 4.5 4.1l3-.6Z" />,
  body: (
    <>
      <circle cx="12" cy="4.8" r="2.2" />
      <path d="M12 7v6M7.5 9.5 12 8l4.5 1.5M9 21l-1.5-5L12 13l4.5 3L15 21M8 21h2M14 21h2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="17" cy="9.5" r="2" />
      <path d="M3.5 20c0-3.2 2-5.5 4.5-5.5s4.5 2.3 4.5 5.5M14 20c0-2.5 1.3-4.2 3.2-4.2 1.9 0 3.3 1.7 3.3 4.2" />
    </>
  ),
  voice: <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" />,
  scale: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="3" />
      <path d="M8 8a4 4 0 0 0 8 0M12 8v3" />
    </>
  ),
  barcode: <path d="M4 6v12M7 6v12M10 6v12M13 6v12M16 6v12M19 6v12" />,
  heart: <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21l8.8-8a5.2 5.2 0 0 0 0-7.4Z" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  person: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </>
  ),
};

export function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.7,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
