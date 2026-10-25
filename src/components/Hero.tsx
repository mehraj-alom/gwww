import { lazy, Suspense } from 'react';
import { hero } from '../content';
import { Icon } from './Icon';
import { PhoneToday } from './Phone';

const GraphScene = lazy(() => import('./GraphScene'));

function GraphFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative h-[58%] w-[58%] max-w-[340px]">
        <span className="hero-orb" />
        <span className="absolute inset-[6%] rounded-full border border-white/[0.08]" />
        <span className="absolute inset-[24%] rounded-full border border-teal/15" />
        <span className="absolute inset-[42%] rounded-full border border-blue/15" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-24 sm:pt-28 lg:pb-16 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(70%_60%_at_50%_0%,rgba(20,122,101,0.16),transparent_70%)]" />

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6">
          <div className="max-w-[38rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.07] px-3 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-teal">
              <span className="chip-dot" />
              {hero.kicker}
            </p>

            <h1 className="display mt-6 text-ink">
              {hero.titleA}{' '}
              <br />
              <span className="text-gradient">{hero.titleB}</span>
            </h1>

            <p className="lead mt-6 max-w-[33rem] text-[1.02rem] sm:text-[1.08rem]">{hero.sub}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/#zugang" className="btn btn-primary px-6 py-3.5 text-[14px]">
                {hero.primary}
                <Icon name="arrow" size={16} />
              </a>
              <a href="/#funktionen" className="btn btn-ghost px-5 py-3.5 text-[14px]">
                {hero.secondary}
              </a>
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] text-ink/45">
              {hero.note.split(' · ').map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" size={12} className="text-teal/80" strokeWidth={2.2} />
                  {item}
                </span>
              ))}
            </p>

            <dl className="mt-10 grid max-w-[30rem] grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.09] pt-6 sm:grid-cols-4">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="num text-[1.45rem] font-semibold leading-none tracking-[-0.04em] text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[10.5px] text-ink/40">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="relative h-[610px] w-full lg:h-[620px]">
              <div className="pointer-events-none absolute inset-x-[-8%] inset-y-[3%]">
                <span className="hero-orb" />
                <span className="hero-ring" />
              </div>

              <div className="absolute inset-0 lg:inset-x-[-4%]">
                <Suspense fallback={<GraphFallback />}>
                  <GraphScene />
                </Suspense>
              </div>

              <div className="hero-phone absolute bottom-0 left-1/2 z-20 -translate-x-1/2 sm:left-[7%] sm:translate-x-0 lg:left-[2%]">
                <div className="phone-tilt float-slow">
                  <PhoneToday />
                </div>
              </div>

              <div className="absolute right-[4%] top-[2%] z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-medium text-ink/55 backdrop-blur md:right-[12%]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal shadow-[0_0_8px_#5eead4]" />
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
