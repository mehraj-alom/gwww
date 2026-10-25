import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useReveal } from '../lib/hooks';

function Placeholder({ children }: { children: string }) {
  return (
    <span className="rounded bg-amber-300/15 px-1.5 py-0.5 font-medium text-amber-200">
      {children}
    </span>
  );
}

export default function Impressum() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Nav />
      <main id="main" className="pb-16 pt-28 sm:pt-32">
        <div className="container max-w-[820px]">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/40 transition-colors hover:text-teal"
          >
            <span aria-hidden="true">←</span> Zur Startseite
          </a>

          <p className="kicker mt-8">Rechtliches</p>
          <h1 className="display-sm mt-3 text-ink">Impressum.</h1>
          <p className="mt-4 text-[13px] text-ink/45">Angaben gemäß § 5 DDG und § 18 MStV.</p>

          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4 text-[12px] leading-relaxed text-amber-100/80">
            <strong className="font-semibold text-amber-100">Entwurf:</strong> Vor dem Livegang müssen
            alle gelb markierten Angaben ersetzt werden. Diese Seite ist keine Rechtsberatung; lass
            die finalen Angaben bitte prüfen.
          </div>

          <div className="prose-de mt-8">
            <h2>Anbieter</h2>
            <p>
              <Placeholder>[Firmenname oder vollständiger Name]</Placeholder>
              <br />
              <Placeholder>[Straße und Hausnummer]</Placeholder>
              <br />
              <Placeholder>[PLZ und Ort]</Placeholder>
              <br />
              <Placeholder>[Land]</Placeholder>
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:hello@healthgraph.shop">hello@healthgraph.shop</a>
              <br />
              Telefon: <Placeholder>[Telefonnummer, falls vorhanden]</Placeholder>
            </p>

            <h2>Vertretungsberechtigt</h2>
            <p>
              <Placeholder>[Name der vertretungsberechtigten Person]</Placeholder>
            </p>

            <h2>Registereintrag</h2>
            <p>
              <Placeholder>[Handelsregister, Vereinsregister oder Partnerschaftsregister und Registernummer, falls vorhanden]</Placeholder>
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              <Placeholder>[Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG, falls vorhanden]</Placeholder>
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              <Placeholder>[Name]</Placeholder>
              <br />
              <Placeholder>[Anschrift wie oben]</Placeholder>
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen. <Placeholder>[Bitte prüfen und bestätigen]</Placeholder>
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
              nicht erkennbar.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              oder Erstellers.
            </p>

            <h2>Gesundheitshinweis</h2>
            <p className="note">
              HealthGraph ist ein Wellness-Begleiter und kein Medizinprodukt. Die App stellt keine
              Diagnosen und ersetzt keine ärztliche Beratung, Untersuchung oder Behandlung.
            </p>

            <p className="mt-8 text-[11px] text-ink/30">Stand: 26. Oktober 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
