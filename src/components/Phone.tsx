import { useId, type ReactNode } from 'react';
import { Icon } from './Icon';
import type { IconName } from '../content';

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3.5 text-[10px] font-semibold text-ink/85">
      <span className="num">9:41</span>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <span className="flex items-end gap-[2px]">
          <span className="h-1 w-[2px] rounded-full bg-ink/50" />
          <span className="h-1.5 w-[2px] rounded-full bg-ink/60" />
          <span className="h-2 w-[2px] rounded-full bg-ink/75" />
          <span className="h-2.5 w-[2px] rounded-full bg-ink/90" />
        </span>
        <span className="ml-0.5 h-2.5 w-4 rounded-[3px] border border-ink/50 p-[2px]">
          <span className="block h-full w-2/3 rounded-[1px] bg-teal" />
        </span>
      </span>
    </div>
  );
}

function TabBar({ active }: { active: 'heute' | 'graph' | 'checkin' | 'profil' }) {
  const tabs: { key: typeof active; label: string; icon: IconName }[] = [
    { key: 'heute', label: 'Heute', icon: 'pulse' },
    { key: 'graph', label: 'Graph', icon: 'graph' },
    { key: 'checkin', label: 'Check-in', icon: 'mic' },
    { key: 'profil', label: 'Profil', icon: 'person' },
  ];
  return (
    <div className="mt-auto flex items-stretch justify-around border-t border-white/[0.07] px-2 pb-2 pt-2">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <div
            key={tab.key}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-1 ${
              isActive ? 'text-teal' : 'text-ink/35'
            }`}
          >
            <Icon name={tab.icon} size={15} strokeWidth={isActive ? 2 : 1.6} />
            <span className="text-[8px] font-medium tracking-wide">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function PhoneFrame({
  children,
  className = '',
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div className={`phone ${className}`} role="img" aria-label={label}>
      <div className="phone-screen flex flex-col">
        <span className="phone-island" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}

export function PhoneToday() {
  const gradientId = useId();
  return (
    <PhoneFrame label="HealthGraph App: Übersicht Heute mit Bereitschaftswert, Puls, HRV, Schlaf und nächstem Schritt">
      <StatusBar />

      <div className="px-4 pb-1 pt-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[18px] font-semibold leading-none tracking-[-0.03em] text-ink">Heute</p>
            <p className="mt-1.5 text-[9px] text-ink/45">Sonntag, 26. Oktober</p>
          </div>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-[9px] font-semibold text-teal">
            M
          </span>
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(150deg,rgba(94,234,212,0.10),rgba(255,255,255,0.02))] p-3.5">
          <div className="flex items-center gap-3.5">
            <div className="relative h-[74px] w-[74px] flex-none">
              <svg viewBox="0 0 92 92" className="h-full w-full -rotate-90">
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="92" y2="92">
                    <stop stopColor="#5eead4" />
                    <stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <circle cx="46" cy="46" r="37" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="6" />
                <circle
                  cx="46"
                  cy="46"
                  r="37"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="232.5"
                  strokeDashoffset="41.8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="num text-[22px] font-semibold leading-none text-ink">82</span>
                <span className="mt-0.5 text-[7px] uppercase tracking-[0.14em] text-ink/45">von 100</span>
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-teal">Bereitschaft</p>
              <p className="mt-1 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-ink">Gut erholt</p>
              <p className="mt-1 text-[9px] leading-snug text-ink/50">
                Deine HRV liegt 6 % über deiner Basis.
              </p>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-3">
            {[
              { label: 'Puls', value: '62', unit: 'bpm' },
              { label: 'HRV', value: '48', unit: 'ms' },
              { label: 'Schlaf', value: '7:20', unit: 'h' },
            ].map((metric) => (
              <div key={metric.label}>
                <p className="text-[8px] text-ink/40">{metric.label}</p>
                <p className="mt-0.5 flex items-baseline gap-1">
                  <span className="num text-[15px] font-semibold leading-none text-ink">{metric.value}</span>
                  <span className="text-[8px] text-ink/40">{metric.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pt-2.5">
        <div className="flex items-center gap-3 rounded-[16px] border border-teal/20 bg-teal/[0.07] p-3">
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-teal/15 text-teal">
            <Icon name="moon" size={15} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[8px] uppercase tracking-[0.15em] text-teal/80">Nächster Schritt</p>
            <p className="truncate text-[11px] font-semibold text-ink">Abend schützen</p>
          </div>
          <Icon name="arrow" size={13} className="text-teal/70" />
        </div>
      </div>

      <div className="px-4 pt-2.5">
        <div className="flex items-center gap-3 rounded-[16px] border border-white/[0.08] bg-white/[0.03] p-3">
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/[0.06] text-ink/70">
            <Icon name="pill" size={15} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-ink">Mittagsdosis</p>
            <p className="text-[9px] text-ink/45">13:00 · Metformin</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-teal/10 px-2 py-1 text-[8px] font-semibold text-teal">
            <Icon name="check" size={9} strokeWidth={2.4} />
            Erfasst
          </span>
        </div>
      </div>

      <div className="px-4 pt-2.5">
        <div className="rounded-[16px] border border-white/[0.07] bg-white/[0.02] px-3 pb-2.5 pt-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-ink/35">Diese Woche</p>
            <p className="num text-[8px] text-ink/35">5 von 7 Tagen</p>
          </div>
          <div className="mt-2 flex items-end gap-1.5">
            {[58, 74, 46, 82, 64, 38, 70].map((height, index) => (
              <span key={index} className="flex flex-1 flex-col items-center gap-1">
                <span
                  className={`w-full rounded-[2px] ${index === 5 ? 'bg-white/12' : 'bg-teal/35'}`}
                  style={{ height: `${height * 0.22}px` }}
                />
                <span className="text-[6px] text-ink/25">{['M', 'D', 'M', 'D', 'F', 'S', 'S'][index]}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="heute" />
    </PhoneFrame>
  );
}

export function PhoneGraph() {
  const gradientId = useId();
  return (
    <PhoneFrame label="HealthGraph App: Zusammenhänge zwischen Schlaf, Puls und Energie">
      <StatusBar />

      <div className="flex items-start justify-between px-4 pb-1 pt-4">
        <div>
          <p className="text-[18px] font-semibold leading-none tracking-[-0.03em] text-ink">Zusammenhänge</p>
          <p className="mt-1.5 text-[9px] text-ink/45">Deine letzten 30 Tage</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[8px] font-semibold text-ink/60">
          30 Tage
        </span>
      </div>

      <div className="px-4 pt-2.5">
        <div className="relative h-[132px] overflow-hidden rounded-[18px] border border-white/[0.09] bg-[radial-gradient(120%_100%_at_50%_0%,rgba(94,234,212,0.10),transparent_65%)]">
          <svg viewBox="0 0 240 132" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="240" y2="132">
                <stop stopColor="rgba(94,234,212,0.5)" />
                <stop offset="1" stopColor="rgba(96,165,250,0.25)" />
              </linearGradient>
            </defs>
            <g stroke={`url(#${gradientId})`} strokeWidth="1">
              <path d="M52 40 111 64M111 64l47-22M111 64l26 38M137 102l45-26M52 40 24 82M24 82l87 20M111 64l-18-34M111 64l70 12" />
            </g>
            <g>
              <circle cx="52" cy="40" r="4.5" fill="#5eead4" />
              <circle cx="111" cy="64" r="6" fill="#a7f3e4" />
              <circle cx="158" cy="42" r="4" fill="#60a5fa" />
              <circle cx="137" cy="102" r="4.5" fill="#5eead4" />
              <circle cx="182" cy="76" r="3.5" fill="#60a5fa" />
              <circle cx="24" cy="82" r="3.5" fill="#5eead4" />
              <circle cx="93" cy="30" r="3" fill="#60a5fa" />
              <circle cx="111" cy="64" r="12" fill="none" stroke="rgba(94,234,212,0.28)" />
            </g>
            <g fill="rgba(243,248,246,0.72)" fontSize="7" fontFamily="Inter Variable, sans-serif">
              <text x="38" y="28">Schlaf</text>
              <text x="90" y="122">Energie</text>
              <text x="160" y="30">Puls</text>
              <text x="186" y="70">Stimmung</text>
              <text x="6" y="74">Essen</text>
              <text x="80" y="20">Stress</text>
            </g>
          </svg>
          <span className="absolute bottom-2 left-2 rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[7px] text-ink/55 backdrop-blur">
            Tippe einen Punkt an
          </span>
        </div>
      </div>

      <div className="px-4 pt-2.5">
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.035] p-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-teal">Erkenntnis</p>
          <p className="mt-1 text-[11px] font-semibold leading-snug text-ink">
            Kurze Nächte, schwere Tage
          </p>
          <p className="mt-1 text-[9px] leading-snug text-ink/50">
            An deinen letzten fünf kurzen Nächten war die Energie am Folgetag im Schnitt 21 % niedriger.
          </p>
          <div className="mt-2.5 flex h-8 items-end gap-1.5" aria-hidden="true">
            {[46, 62, 38, 76, 55, 30, 68].map((height, index) => (
              <span
                key={index}
                className={`flex-1 rounded-sm ${index === 5 ? 'bg-teal' : 'bg-teal/20'}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pt-2">
        {[
          { label: 'Schlaf & Stimmung', value: '+0,62', strong: true },
          { label: 'Essen & Energie', value: '+0,41', strong: false },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border-b border-white/[0.06] py-2 last:border-0"
          >
            <span className="flex items-center gap-2 text-[9px] text-ink/65">
              <span className={`h-1.5 w-1.5 rounded-full ${row.strong ? 'bg-teal' : 'bg-blue'}`} />
              {row.label}
            </span>
            <span className="num text-[10px] font-semibold text-ink">{row.value}</span>
          </div>
        ))}
      </div>

      <TabBar active="graph" />
    </PhoneFrame>
  );
}

export function PhoneCheckin() {
  return (
    <PhoneFrame label="HealthGraph App: Check-in per Stimme, auf dem Gerät ausgewertet">
      <StatusBar />

      <div className="flex items-start justify-between px-4 pb-1 pt-4">
        <div>
          <p className="text-[18px] font-semibold leading-none tracking-[-0.03em] text-ink">Check-in</p>
          <p className="mt-1.5 text-[9px] text-ink/45">Sonntagabend</p>
        </div>
        <span className="rounded-full border border-teal/25 bg-teal/10 px-2 py-1 text-[8px] font-semibold text-teal">
          60 Sekunden
        </span>
      </div>

      <div className="flex flex-col items-center px-4 pt-6">
        <div className="relative grid h-[112px] w-[112px] place-items-center">
          <span className="orbit-ring absolute inset-0 rounded-full border border-teal/30" />
          <span className="orbit-ring absolute inset-2 rounded-full border border-teal/20 [animation-delay:1.2s]" />
          <span className="absolute inset-4 rounded-full bg-teal/10 blur-md" />
          <span className="relative grid h-14 w-14 place-items-center rounded-full border border-teal/35 bg-teal/15 text-teal">
            <Icon name="mic" size={24} strokeWidth={1.6} />
          </span>
        </div>
        <p className="mt-5 text-center text-[13px] font-semibold leading-snug tracking-[-0.01em] text-ink">
          Wie war dein Schlaf?
        </p>
        <p className="mt-1 text-center text-[9px] text-ink/45">Antworte einfach. Du musst nichts tippen.</p>
      </div>

      <div className="mt-4 flex justify-center gap-1.5 px-4">
        {['Gut', 'Okay', 'Schlecht'].map((option, index) => (
          <span
            key={option}
            className={`rounded-full border px-3 py-1.5 text-[9px] font-medium ${
              index === 1
                ? 'border-teal/40 bg-teal/15 text-teal'
                : 'border-white/10 bg-white/[0.03] text-ink/50'
            }`}
          >
            {option}
          </span>
        ))}
      </div>

      <div className="mx-4 mt-4 rounded-[16px] border border-white/[0.08] bg-white/[0.03] p-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          {[6, 11, 16, 9, 20, 13, 7, 17, 10, 5].map((height, index) => (
            <span
              key={index}
              className="w-[2px] rounded-full bg-teal/55"
              style={{ height: `${height + 8}px` }}
            />
          ))}
          <span className="ml-auto text-[8px] text-ink/40">0:12</span>
        </div>
        <p className="mt-2.5 text-[10px] leading-snug text-ink/70">
          „Bin gegen drei wach geworden, Schulter zieht wieder.“
        </p>
        <p className="mt-1.5 flex items-center gap-1 text-[8px] text-teal/80">
          <Icon name="lock" size={9} />
          Wird auf deinem Gerät ausgewertet
        </p>
      </div>

      <div className="px-4 pt-3">
        <span className="flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-2.5 text-[10px] font-semibold text-stage">
          <span className="h-1.5 w-1.5 rounded-full bg-stage" />
          Aufnahme starten
        </span>
      </div>

      <TabBar active="checkin" />
    </PhoneFrame>
  );
}
