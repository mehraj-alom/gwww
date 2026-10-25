import { footer } from '../content';
import { Icon } from './Icon';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.09] pb-8 pt-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-16">
          <div>
            <a href="/#top" className="inline-block" aria-label="HealthGraph Startseite">
              <Logo size={32} />
            </a>
            <p className="mt-4 max-w-[22rem] text-[13px] leading-relaxed text-ink/45">{footer.blurb}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] px-2.5 py-1 text-[10px] text-ink/40">
                <Icon name="shield" size={11} className="text-teal/60" />
                DSGVO von Anfang an
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] px-2.5 py-1 text-[10px] text-ink/40">
                <Icon name="phone" size={11} className="text-teal/60" />
                Für Android
              </span>
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-ink/30">
              {footer.contactLabel}
            </p>
            <a
              href={`mailto:${footer.contactEmail}`}
              className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-ink/70 transition-colors hover:text-teal"
            >
              <Icon name="mail" size={13} className="text-teal/70" />
              {footer.contactEmail}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/30">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-[12px] text-ink/50 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
          <p className="text-[10.5px] leading-relaxed text-ink/35">{footer.disclaimer}</p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-[10.5px] text-ink/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} HealthGraph. {footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{footer.madeFor}</span>
            <a href="/impressum/" className="transition-colors hover:text-ink/60">
              Impressum
            </a>
            <a href="/datenschutz/" className="transition-colors hover:text-ink/60">
              Datenschutz
            </a>
            <a
              href="https://world.openfoodfacts.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-colors hover:text-ink/60"
            >
              Lebensmitteldaten: Open Food Facts (ODbL)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
