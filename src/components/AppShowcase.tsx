import { screens } from '../content';
import { PhoneCheckin, PhoneGraph, PhoneToday } from './Phone';

const phones = [<PhoneToday key="today" />, <PhoneGraph key="graph" />, <PhoneCheckin key="checkin" />];

export default function AppShowcase() {
  return (
    <section id="app" className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="app-title">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-[radial-gradient(55%_60%_at_50%_50%,rgba(20,122,101,0.16),transparent_72%)]" />

      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div>
            <p className="kicker">{screens.kicker}</p>
            <h2 id="app-title" className="h2 mt-3 text-ink">
              {screens.title}
            </h2>
          </div>
          <p className="lead max-w-[24rem] sm:text-right">{screens.sub}</p>
        </div>

        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-10 overflow-x-auto px-5 pb-6 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0"
          data-reveal
        >
          {screens.items.map((screen, index) => (
            <figure
              key={screen.title}
              className={`flex min-w-[264px] snap-center flex-col items-center ${
                index === 1 ? 'md:-mt-8' : ''
              }`}
            >
              <div className="relative">
                {index === 1 && (
                  <div
                    className="pointer-events-none absolute -inset-8 -z-10 rounded-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(94,234,212,0.14),transparent_70%)]"
                    aria-hidden="true"
                  />
                )}
                <div className={index === 0 ? 'phone-tilt' : index === 2 ? 'phone-tilt-2' : ''}>
                  {phones[index]}
                </div>
              </div>
              <figcaption className="mt-8 max-w-[17rem] text-center">
                <p className="num text-[10px] font-medium tracking-[0.18em] text-teal/70">
                  0{index + 1}
                </p>
                <p className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  {screen.title}
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink/45">{screen.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
