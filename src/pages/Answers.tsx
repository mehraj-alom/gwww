import { useEffect, useMemo, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Icon } from '../components/Icon';
import { answers, answerCategories, normalize } from '../answers';
import { useReveal } from '../lib/hooks';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: answers.map((entry) => ({
    '@type': 'Question',
    name: entry.q,
    acceptedAnswer: { '@type': 'Answer', text: entry.a },
  })),
};

export default function Answers() {
  const ref = useReveal<HTMLDivElement>();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('Alle');

  const filtered = useMemo(() => {
    const term = normalize(query.trim());
    return answers.filter((entry) => {
      const inCategory = category === 'Alle' || entry.category === category;
      if (!inCategory) return false;
      if (!term) return true;
      return normalize(`${entry.q} ${entry.a}`).includes(term);
    });
  }, [query, category]);

  const groups = useMemo(() => {
    return answerCategories
      .map((name) => ({
        name,
        items: filtered.filter((entry) => entry.category === name),
      }))
      .filter((group) => group.items.length > 0);
  }, [filtered]);

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const details = el.closest('details');
      if (details) details.open = true;
      requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
    }
  }, []);

  const reset = () => {
    setQuery('');
    setCategory('Alle');
  };

  return (
    <div ref={ref}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />

      <main id="main" className="pb-20 pt-28 sm:pt-32">
        <div className="container">
          <div className="mx-auto max-w-[780px]">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/40 transition-colors hover:text-teal"
            >
              <span aria-hidden="true">←</span> Zur Startseite
            </a>

            <p className="kicker mt-8">Antworten</p>
            <h1 className="display-sm mt-3 text-ink">
              Fragen,{' '}
              <br />
              <span className="text-gradient">ehrlich beantwortet.</span>
            </h1>
            <p className="lead mt-5 max-w-[36rem]">
              Puls, Schlaf, Medikamente, Ernährung, Zyklus, Daten und Preise. Keine Versprechen,
              die die App nicht halten kann.
            </p>

            <div className="relative mt-8">
              <Icon
                name="search"
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Frage oder Stichwort suchen …"
                aria-label="Antworten durchsuchen"
                className="field !rounded-full !py-3.5 !pl-11 !pr-12 text-[13px]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Suche leeren"
                  className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-white/[0.06] text-ink/50 hover:text-ink"
                >
                  <Icon name="close" size={13} />
                </button>
              )}
            </div>

            <div className="-mx-5 mt-4 flex gap-1.5 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
              {['Alle', ...answerCategories].map((name) => {
                const selected = category === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setCategory(name)}
                    aria-pressed={selected}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-[11px] font-medium transition-colors ${
                      selected
                        ? 'border-teal/35 bg-teal/12 text-teal'
                        : 'border-white/[0.09] bg-white/[0.02] text-ink/45 hover:border-white/20 hover:text-ink'
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-b border-white/[0.1] pb-3">
              <p className="text-[11px] text-ink/35">
                {filtered.length} {filtered.length === 1 ? 'Antwort' : 'Antworten'}
                {category !== 'Alle' ? ` in ${category}` : ''}
              </p>
              {(query || category !== 'Alle') && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-[11px] font-medium text-teal hover:text-white"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>

            {groups.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-white/[0.09] bg-white/[0.025] p-8 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/[0.04] text-ink/40">
                  <Icon name="search" size={20} />
                </span>
                <p className="mt-4 text-[15px] font-semibold text-ink">Dazu steht noch nichts hier.</p>
                <p className="mx-auto mt-2 max-w-[26rem] text-[12.5px] leading-relaxed text-ink/45">
                  Schreib uns deine Frage. Wir antworten lieber direkt, als eine Antwort zu erfinden.
                </p>
                <a
                  href="mailto:hello@healthgraph.shop"
                  className="btn btn-ghost mt-5 !py-2.5 text-[12px]"
                >
                  <Icon name="mail" size={14} />
                  hello@healthgraph.shop
                </a>
              </div>
            ) : (
              <div className="mt-6 space-y-10">
                {groups.map((group) => (
                  <section key={group.name} aria-labelledby={`group-${group.name}`}>
                    <div className="flex items-center gap-3">
                      <h2
                        id={`group-${group.name}`}
                        className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal/80"
                      >
                        {group.name}
                      </h2>
                      <span className="h-px flex-1 bg-white/[0.07]" />
                      <span className="num text-[10px] text-ink/25">{group.items.length}</span>
                    </div>

                    <div className="mt-2">
                      {group.items.map((entry) => (
                        <details
                          key={entry.slug}
                          id={entry.slug}
                          className="answer-item scroll-mt-28"
                        >
                          <summary>
                            <span className="pr-6">{entry.q}</span>
                            <Icon name="plus" size={14} className="plus mt-0.5" />
                          </summary>
                          <div className="answer-body">{entry.a}</div>
                        </details>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="container mt-16">
          <div className="mx-auto flex max-w-[780px] flex-col items-start justify-between gap-6 rounded-[28px] border border-white/[0.09] bg-[linear-gradient(150deg,rgba(94,234,212,0.09),rgba(255,255,255,0.02))] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                Deine Frage ist nicht dabei?
              </p>
              <p className="mt-1.5 max-w-[28rem] text-[12.5px] leading-relaxed text-ink/45">
                Schreib uns. Und wenn du die App selbst ausprobieren willst, sichere dir einen Platz
                im frühen Zugang.
              </p>
            </div>
            <a href="/#zugang" className="btn btn-primary flex-none !py-3 text-[12.5px]">
              Platz sichern
              <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
