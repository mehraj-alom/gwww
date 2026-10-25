import { day } from '../content';
import { Icon } from './Icon';

export default function Day() {
  return (
    <section id="alltag" className="relative py-20 sm:py-28" aria-labelledby="alltag-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <p className="kicker">{day.kicker}</p>
            <h2 id="alltag-title" className="h2 mt-3 max-w-[22rem] text-ink">
              {day.title}
            </h2>
            <p className="lead mt-6 max-w-[27rem]">{day.sub}</p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.09] px-3 py-1.5 text-[11px] text-ink/45">
              <Icon name="clock" size={13} className="text-teal/70" />
              07:12 bis 22:47
            </div>

            <p className="mt-8 max-w-[24rem] text-[12.5px] leading-relaxed text-ink/35">
              Keine Serie, die reißt. Keine Punkte, die fehlen. Nur ein Tag, der von selbst im Graph
              landet.
            </p>
          </div>

          <ol className="relative" data-reveal>
            {day.moments.map((moment, index) => (
              <li
                key={moment.time}
                className="grid grid-cols-[42px_22px_1fr] gap-3 pb-7 last:pb-0 sm:grid-cols-[52px_24px_1fr] sm:gap-4"
              >
                <span className="num pt-1.5 text-right text-[11px] font-medium text-ink/35">
                  {moment.time}
                </span>

                <div className="relative flex justify-center">
                  {index < day.moments.length - 1 && (
                    <span className="absolute bottom-[-28px] top-7 w-px bg-gradient-to-b from-teal/30 to-white/[0.06]" />
                  )}
                  <span className="relative mt-1 grid h-6 w-6 place-items-center rounded-full border border-teal/25 bg-[#081310] text-teal shadow-[0_0_18px_-4px_rgba(94,234,212,0.35)]">
                    <Icon name={moment.icon} size={11} />
                  </span>
                </div>

                <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04] sm:px-5 sm:py-4">
                  <p className="text-[14px] font-semibold tracking-[-0.01em] text-ink">{moment.title}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/50">{moment.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
