import { pricing } from '../content';
import { Icon } from './Icon';

export default function Pricing() {
  return (
    <section id="preise" className="relative py-20 sm:py-28" aria-labelledby="preise-title">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div>
            <p className="kicker">{pricing.kicker}</p>
            <h2 id="preise-title" className="h2 mt-3 text-ink">
              {pricing.title}
            </h2>
          </div>
          <p className="lead max-w-[27rem] sm:text-right">{pricing.sub}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3" data-reveal>
          {pricing.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-[28px] border p-6 sm:p-7 ${
                tier.best
                  ? 'border-teal/30 bg-[linear-gradient(155deg,rgba(94,234,212,0.13),rgba(96,165,250,0.05)_55%,rgba(255,255,255,0.02))] shadow-[0_30px_80px_-40px_rgba(94,234,212,0.45)]'
                  : 'border-white/[0.09] bg-white/[0.025]'
              }`}
            >
              {tier.best && (
                <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#04120e]">
                  {pricing.recommended}
                </span>
              )}

              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink">{tier.name}</h3>
                {tier.best && <Icon name="sparkle" size={16} className="text-teal/70" />}
              </div>

              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="num text-[2.7rem] font-semibold leading-none tracking-[-0.05em] text-ink">
                  {tier.price}
                </span>
                <span className="text-[11px] text-ink/40">{tier.per}</span>
              </p>

              <div className="my-6 h-px bg-white/[0.08]" />

              <ul className="space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-ink/60">
                    <Icon
                      name="check"
                      size={13}
                      strokeWidth={2.1}
                      className={`mt-0.5 flex-none ${tier.best ? 'text-teal' : 'text-ink/30'}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  href="/#zugang"
                  className={`btn w-full ${tier.best ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {tier.cta}
                  <Icon name="arrow" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/[0.08] pt-5 text-[11px] text-ink/35 sm:flex-row sm:items-center" data-reveal>
          <p>{pricing.note}</p>
          <p className="inline-flex items-center gap-1.5">
            <Icon name="lock" size={11} className="text-teal/60" />
            Export und Löschung in jeder Stufe.
          </p>
        </div>
      </div>
    </section>
  );
}
