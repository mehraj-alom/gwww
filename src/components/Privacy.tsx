import { privacy } from '../content';
import { Icon } from './Icon';

export default function Privacy() {
  return (
    <section id="privatsphaere" className="relative py-16 sm:py-24" aria-labelledby="privatsphaere-title">
      <div className="container">
        <div
          className="card-white relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
          data-reveal
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(7,16,14,0.10)_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.14),transparent_68%)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-deep">
                {privacy.kicker}
              </p>
              <h2
                id="privatsphaere-title"
                className="mt-3 text-[clamp(2rem,3.8vw,3.1rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-[#07100e]"
              >
                Deine Daten{' '}
                <br />
                bleiben deine.
              </h2>
              <p className="mt-5 max-w-[26rem] text-[14px] leading-relaxed text-[#43554f]">
                {privacy.sub}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {privacy.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0f766e]/20 bg-[#0f766e]/[0.06] px-3 py-1.5 text-[11px] font-medium text-[#0b5c54]"
                  >
                    <Icon name="check" size={12} strokeWidth={2.2} />
                    {badge}
                  </span>
                ))}
              </div>

              <a
                href="/datenschutz/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#07100e] px-5 py-3 text-[12.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Datenschutzerklärung lesen
                <Icon name="arrow" size={14} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {privacy.points.map((point, index) => (
                <div
                  key={point.title}
                  className={`rounded-[22px] border border-[#07100e]/[0.07] bg-white/70 p-5 ${
                    index === 0 ? 'sm:bg-[#eef5f2]' : ''
                  }`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0f766e]/10 text-[#0b5c54]">
                    <Icon name={point.icon} size={16} />
                  </span>
                  <p className="mt-4 text-[14px] font-semibold tracking-[-0.01em] text-[#07100e]">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[#50625c]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative mt-10 max-w-[52rem] border-t border-[#07100e]/[0.08] pt-5 text-[11px] leading-relaxed text-[#64756f]">
            {privacy.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
