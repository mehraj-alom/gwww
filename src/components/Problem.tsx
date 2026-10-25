import type { CSSProperties } from 'react';
import { problem } from '../content';
import { Icon } from './Icon';
import type { IconName } from '../content';

const appIcons: IconName[] = [
  'moon',
  'scale',
  'pill',
  'heart',
  'pulse',
  'sparkle',
  'plus',
  'eye',
  'document',
  'check',
];

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="problem-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <div data-reveal>
            <p className="kicker">{problem.kicker}</p>
            <h2 id="problem-title" className="h2 mt-3 text-ink">
              Zehn Apps.{' '}
              <br />
              <span className="text-ink/40">Kein Zusammenhang.</span>
            </h2>
            <p className="lead mt-6 max-w-[31rem]">{problem.lead}</p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.03] p-4">
              <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-white/[0.05] text-ink/60">
                <Icon name="document" size={15} />
              </span>
              <p className="text-[13px] leading-relaxed text-ink/60">
                <span className="font-semibold text-ink">Zehn Abos.</span> Meist mehr als 40 € im Monat.
                HealthGraph startet bei 0 €.
              </p>
            </div>
          </div>

          <div className="relative" data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
            <div className="rounded-[28px] border border-white/[0.08] bg-[#07100e]/60 p-4 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-5">
              <div className="flex items-center justify-between px-1 pb-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink/35">
                  Dein Handy, heute
                </p>
                <span className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[9px] text-ink/35">
                  10 Abos
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {problem.apps.map((app, index) => (
                  <div
                    key={app}
                    className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-1 py-3 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
                    style={{ transform: `rotate(${(index % 5) - 2}deg)` }}
                  >
                    <Icon name={appIcons[index]} size={15} className="text-ink/25" />
                    <span className="max-w-full truncate text-[8px] text-ink/30">{app}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 overflow-hidden rounded-[22px] border border-teal/20 bg-[linear-gradient(145deg,rgba(94,234,212,0.10),rgba(96,165,250,0.05))] p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-teal/12 text-teal">
                    <Icon name="graph" size={19} />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold tracking-[-0.02em] text-ink">
                      {problem.solutionTitle}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-ink/50">
                      Schlaf, Essen, Medikamente, Puls, Zyklus, Befunde.
                    </p>
                  </div>
                  <span className="ml-auto hidden rounded-full bg-teal/12 px-2.5 py-1 text-[9px] font-semibold text-teal sm:block">
                    16 in 1
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-px flex-1 bg-gradient-to-r from-teal/10 via-teal/45 to-teal/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_#5eead4]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-teal/10 via-blue/40 to-teal/10" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[42px] bg-[radial-gradient(50%_50%_at_60%_40%,rgba(94,234,212,0.09),transparent_70%)]" />
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-3" data-reveal>
          {[
            'Schlaf erklärt Morgen.',
            'Essen erklärt Nachmittage.',
            'Medikamente erklären flache Wochen.',
          ].map((line) => (
            <p key={line} className="text-[13px] leading-relaxed text-ink/55">
              <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-teal/70" />
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
