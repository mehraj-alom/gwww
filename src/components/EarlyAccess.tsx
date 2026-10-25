import { useState, type FormEvent } from 'react';
import { earlyAccess } from '../content';
import { Icon } from './Icon';

type Status = 'idle' | 'sending' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function endpoint() {
  const explicit = import.meta.env.VITE_EARLY_ACCESS_ENDPOINT as string | undefined;
  if (explicit) return explicit;
  const base = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? '';
  return `${base}/api/v1/early-access`;
}

export default function EarlyAccess() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [consent, setConsent] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!emailPattern.test(email.trim())) next.email = earlyAccess.emailError;
    if (!consent) next.consent = earlyAccess.consentError;
    setErrors(next);
    return next;
  };

  const focusFirst = (next: Record<string, string>) => {
    const order = ['email', 'consent'];
    const first = order.find((key) => next[key]);
    if (first) {
      requestAnimationFrame(() => document.getElementById(`ea-${first}`)?.focus());
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honey = form.elements.namedItem('website');
    if (honey instanceof HTMLInputElement && honey.value) return;

    const next = validate();
    if (Object.keys(next).length) {
      focusFirst(next);
      return;
    }

    setStatus('sending');
    try {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 12000);
      const response = await fetch(endpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          city: city.trim(),
        }),
        signal: controller.signal,
      });
      window.clearTimeout(timer);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const clearError = (field: string) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  return (
    <section id="zugang" className="relative py-20 sm:py-28" aria-labelledby="zugang-title">
      <div className="container">
        <div className="relative overflow-hidden rounded-[34px] border border-white/[0.1] bg-[#06100e]/75 px-6 py-10 shadow-[0_50px_140px_-60px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14" data-reveal>
          <div
            className="pointer-events-none absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(20,122,101,0.32),transparent_66%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-44 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.13),transparent_68%)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="kicker">{earlyAccess.kicker}</p>
              <h2
                id="zugang-title"
                className="mt-3 text-[clamp(2.1rem,4vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink"
              >
                Sichere dir{' '}
                <br />
                einen Platz.
              </h2>
              <p className="mt-5 max-w-[27rem] text-[14px] leading-relaxed text-ink/55">
                {earlyAccess.sub}
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Kostenlos starten, keine Kreditkarte',
                  'Einladung per E-Mail, meist innerhalb von Tagen',
                  'Jederzeit austragen, Daten löschen',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[12.5px] text-ink/60">
                    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-teal/12 text-teal">
                      <Icon name="check" size={10} strokeWidth={2.4} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-[25rem] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-[12px] leading-relaxed text-ink/45">
                <span className="font-medium text-ink/70">{earlyAccess.note}</span>{' '}
                {earlyAccess.optionalNote}
              </p>
            </div>

            <div className="rounded-[26px] border border-white/[0.1] bg-white/[0.03] p-5 sm:p-6">
              {status === 'success' ? (
                <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-teal/25 bg-teal/12 text-teal">
                    <Icon name="mail" size={24} />
                  </span>
                  <p className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-ink">
                    {earlyAccess.successTitle}
                  </p>
                  <p className="mt-2 max-w-[18rem] text-[13px] leading-relaxed text-ink/50">
                    {earlyAccess.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setCity('');
                      setConsent(false);
                    }}
                    className="mt-6 text-[12px] font-medium text-teal hover:text-white"
                  >
                    Weitere Person eintragen
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label htmlFor="ea-name" className="mb-1.5 block text-[11px] font-medium text-ink/55">
                        {earlyAccess.nameLabel}
                      </label>
                      <input
                        id="ea-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={earlyAccess.namePlaceholder}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="field"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="ea-city" className="mb-1.5 block text-[11px] font-medium text-ink/55">
                        {earlyAccess.cityLabel}
                      </label>
                      <input
                        id="ea-city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder={earlyAccess.cityPlaceholder}
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        className="field"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="ea-email" className="mb-1.5 block text-[11px] font-medium text-ink/55">
                        {earlyAccess.emailLabel}
                      </label>
                      <input
                        id="ea-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder={earlyAccess.emailPlaceholder}
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          clearError('email');
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'ea-email-error' : 'ea-email-hint'}
                        className="field"
                      />
                      {errors.email ? (
                        <p id="ea-email-error" className="mt-1.5 text-[11px] text-red-300">
                          {errors.email}
                        </p>
                      ) : (
                        <p id="ea-email-hint" className="mt-1.5 text-[10.5px] text-ink/30">
                          {earlyAccess.helper}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="ea-website">Website</label>
                    <input id="ea-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="mt-5 flex items-start gap-2.5">
                    <input
                      id="ea-consent"
                      name="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(event) => {
                        setConsent(event.target.checked);
                        clearError('consent');
                      }}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'ea-consent-error' : undefined}
                      className="checkbox"
                    />
                    <div>
                      <label htmlFor="ea-consent" className="cursor-pointer text-[11px] leading-relaxed text-ink/45">
                        {earlyAccess.consentBefore}
                        <a href="/datenschutz/" className="text-teal underline underline-offset-2">
                          {earlyAccess.consentLink}
                        </a>
                        {earlyAccess.consentAfter}
                      </label>
                      {errors.consent && (
                        <p id="ea-consent-error" className="mt-1 text-[11px] text-red-300">
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2.5 text-[11.5px] text-red-200">
                      {earlyAccess.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary mt-5 w-full py-3.5 text-[13px] disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === 'sending' ? earlyAccess.submitting : earlyAccess.submit}
                    {status !== 'sending' && <Icon name="arrow" size={15} />}
                  </button>

                  <p className="mt-4 text-center text-[10.5px] text-ink/30">
                    {earlyAccess.contactNote}
                    <a
                      href={`mailto:${earlyAccess.contactEmail}`}
                      className="text-ink/55 underline underline-offset-2 hover:text-teal"
                    >
                      {earlyAccess.contactEmail}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
