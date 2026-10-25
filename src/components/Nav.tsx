import { useEffect, useRef, useState } from 'react';
import { nav } from '../content';
import { useLockBody, useScrolled } from '../lib/hooks';
import { Icon } from './Icon';
import { Logo } from './Logo';

export default function Nav() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-stage/75 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <a href="/#top" className="shrink-0 rounded-lg" aria-label="HealthGraph Startseite">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/[0.05] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <a href="/#zugang" className="btn btn-primary text-[13px]">
                {nav.cta}
                <Icon name="arrow" size={15} />
              </a>
            </div>
            <button
              type="button"
              ref={triggerRef}
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-ink transition-colors hover:bg-white/[0.08] lg:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" size={19} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          className={`absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-label="Menü schließen"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col border-l border-white/10 bg-[#06100e] px-6 pb-8 pt-5 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobiles Menü"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              ref={closeRef}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-ink"
              aria-label="Menü schließen"
            >
              <Icon name="close" size={19} />
            </button>
          </div>

          <nav className="mt-12 flex flex-col" aria-label="Mobile Navigation">
            {nav.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`border-b border-white/[0.07] py-4 text-[1.65rem] font-medium tracking-[-0.03em] text-ink transition-all duration-500 ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${90 + index * 45}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <a
              href="/#zugang"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-primary w-full"
            >
              {nav.cta}
              <Icon name="arrow" size={16} />
            </a>
            <p className="mt-4 text-center text-[11px] text-white/45">
              Für Android · DSGVO-konform · Kein Wearable nötig
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
