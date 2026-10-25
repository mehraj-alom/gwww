import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { capabilities } from '../content';
import { Icon } from './Icon';

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = capabilities.groups[active];

  const select = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const count = capabilities.groups.length;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      select((active + 1) % count);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      select((active - 1 + count) % count);
    } else if (event.key === 'Home') {
      event.preventDefault();
      select(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      select(count - 1);
    }
  };

  return (
    <section id="funktionen" className="relative py-20 sm:py-28" aria-labelledby="funktionen-title">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_10%,rgba(20,122,101,0.12),transparent_75%)]" />

      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div className="max-w-[38rem]">
            <p className="kicker">{capabilities.kicker}</p>
            <h2 id="funktionen-title" className="h2 mt-3 text-ink">
              Alles, was{' '}
              <br />
              zusammengehört.
            </h2>
          </div>
          <p className="lead max-w-[28rem] lg:pb-2">{capabilities.sub}</p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] p-1.5 sm:inline-flex"
          role="tablist"
          aria-label="Funktionsbereiche"
          onKeyDown={onKeyDown}
        >
          {capabilities.groups.map((entry, index) => {
            const selected = index === active;
            return (
              <button
                key={entry.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all sm:px-5 ${
                  selected
                    ? 'bg-ink text-stage shadow-[0_8px_24px_-10px_rgba(243,248,246,0.55)]'
                    : 'text-ink/55 hover:bg-white/[0.05] hover:text-ink'
                }`}
              >
                <span className={`num text-[10px] ${selected ? 'text-stage/45' : 'text-ink/30'}`}>
                  {entry.kicker}
                </span>
                {entry.title}
              </button>
            );
          })}
        </div>

        <div
          key={group.id}
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="tab-panel mt-8"
        >
          <p className="max-w-[42rem] text-[14px] leading-relaxed text-ink/50">{group.blurb}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {group.items.map((item, index) => (
              <article
                key={item.name}
                className="group flex flex-col rounded-[24px] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-5 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.04] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-teal/15 bg-teal/[0.08] text-teal transition-colors group-hover:bg-teal/[0.12]">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="num text-[10px] font-medium uppercase tracking-[0.14em] text-ink/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/55">{item.desc}</p>

                <details className="group/details mt-auto border-t border-white/[0.07] pt-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[11px] font-medium text-ink/45 transition-colors hover:text-teal [&::-webkit-details-marker]:hidden">
                    Im Detail
                    <Icon
                      name="chevron"
                      size={13}
                      className="transition-transform duration-300 group-open/details:rotate-180"
                    />
                  </summary>
                  <p className="pt-3 text-[12.5px] leading-relaxed text-ink/50">{item.detail}</p>
                </details>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6" data-reveal>
          <p className="text-[12px] text-ink/40">{capabilities.footnote}</p>
          <a
            href="/antworten/"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-teal transition-colors hover:text-white"
          >
            Alle Antworten lesen
            <Icon name="arrow" size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
