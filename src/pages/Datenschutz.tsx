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

export default function Datenschutz() {
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
          <h1 className="display-sm mt-3 text-ink">Datenschutz.</h1>
          <p className="mt-4 text-[13px] text-ink/45">
            Wie diese Website und die HealthGraph-App mit deinen Daten umgehen.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4 text-[12px] leading-relaxed text-amber-100/80">
            <strong className="font-semibold text-amber-100">Entwurf:</strong> Gelb markierte
            Angaben müssen vor dem Livegang ergänzt und rechtlich geprüft werden. Diese Seite ist
            keine Rechtsberatung.
          </div>

          <div className="prose-de mt-8">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten ist:
              <br />
              <Placeholder>[Firmenname oder vollständiger Name]</Placeholder>
              <br />
              <Placeholder>[Straße und Hausnummer]</Placeholder>
              <br />
              <Placeholder>[PLZ und Ort, Land]</Placeholder>
              <br />
              E-Mail: <a href="mailto:hello@healthgraph.shop">hello@healthgraph.shop</a>
            </p>

            <h2>2. Das Wichtigste zuerst</h2>
            <p>
              HealthGraph ist zuerst ein lokales Produkt. Kamera-Puls, Gesichts-Puls und der
              Gesundheitsgraph werden auf deinem Gerät verarbeitet. Diese Website setzt keine
              Analyse-Cookies, bindet keine Werbenetzwerke ein und lädt keine externen Schriftarten.
            </p>

            <h2>3. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird bei <Placeholder>[Hosting-Anbieter und Ort]</Placeholder> gehostet.
              Beim Aufruf erfasst der Server technisch notwendige Daten: gekürzte oder vollständige
              IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browsertyp
              und Betriebssystem. Diese Daten brauchen wir, um die Website auszuliefern und Angriffe
              abzuwehren.
            </p>
            <p>
              Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren, stabilen Betrieb
              (Art. 6 Abs. 1 lit. f DSGVO). Die Logfiles werden nach{' '}
              <Placeholder>[z. B. 7 Tagen]</Placeholder> gelöscht, sofern sie nicht zur Aufklärung
              eines konkreten Sicherheitsvorfalls länger benötigt werden.
            </p>
            <p>
              Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28
              DSGVO. <Placeholder>[Vertrag bestätigen und Anbieter eintragen]</Placeholder>
            </p>

            <h2>4. Früher Zugang per Formular</h2>
            <p>
              Wenn du dich für den frühen Zugang einträgst, verarbeiten wir deinen Namen, deine
              E-Mail-Adresse und deine Stadt. Wir nutzen diese Angaben ausschließlich, um dir eine
              Einladung zur App zu schicken und die ersten Testgruppen nach Region
              zusammenzustellen. Es findet keine Werbung statt und keine Weitergabe an Dritte zu
              Werbezwecken.
            </p>
            <p>
              Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst sie
              jederzeit mit Wirkung für die Zukunft widerrufen, am einfachsten per E-Mail an{' '}
              <a href="mailto:hello@healthgraph.shop">hello@healthgraph.shop</a>. Wir löschen deine
              Angaben dann, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p>
              Die Einladung versenden wir über <Placeholder>[E-Mail-Anbieter und Ort]</Placeholder>.
              Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung.{' '}
              <Placeholder>[Anbieter bestätigen]</Placeholder>
            </p>

            <h2>5. Kontakt per E-Mail</h2>
            <p>
              Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse und den Inhalt der
              Nachricht, um zu antworten. Rechtsgrundlage ist die Bearbeitung deiner Anfrage
              (Art. 6 Abs. 1 lit. b DSGVO) beziehungsweise unser berechtigtes Interesse an der
              Beantwortung (Art. 6 Abs. 1 lit. f DSGVO). Wir löschen die Nachricht, sobald sie
              erledigt ist und keine gesetzlichen Aufbewahrungspflichten gelten.
            </p>

            <h2>6. Keine Cookies, keine Analyse</h2>
            <p>
              Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken. Es gibt keine
              Reichweitenmessung, kein Profiling und keine Einbindung von Werbenetzwerken. Die
              Schriftart Inter wird mit der Website ausgeliefert und nicht von einem externen Server
              geladen. Die 3D-Darstellung wird lokal im Browser berechnet.
            </p>
            <p>
              Externe Links, etwa zu Open Food Facts, werden erst beim Anklicken geöffnet. Erst dann
              gelten die Datenschutzregeln des jeweiligen Anbieters.
            </p>

            <h2>7. Die HealthGraph-App</h2>
            <p>
              Gesundheitsdaten sind besonders sensible Daten (Art. 9 DSGVO). In der App werden
              Messungen zuerst auf deinem Gerät verarbeitet. Kamera-Puls und Gesichts-Puls verlassen
              das Gerät nicht. Wenn du eine Cloud-Sicherung aktivierst, werden die Daten
              verschlüsselt übertragen und gespeichert. Rechtsgrundlage ist dann deine ausdrückliche
              Einwilligung (Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO).
            </p>
            <p>
              Die App fragt Berechtigungen nur ab, wenn sie sie braucht: Kamera für Puls und
              Barcode, Mikrofon für Check-ins, Benachrichtigungen für Erinnerungen. Du kannst
              Berechtigungen jederzeit in den Systemeinstellungen entziehen. Export und Löschung
              deiner Daten sind in der App mit einem Tipp möglich.
            </p>
            <p>
              <Placeholder>[Backend, Speicherort, Verschlüsselungsdetails und Löschfristen der App ergänzen]</Placeholder>
            </p>

            <h2>8. Empfänger und Auftragsverarbeiter</h2>
            <p>
              Wir geben personenbezogene Daten nur weiter, wenn es für den Betrieb nötig ist, du
              eingewilligt hast oder eine gesetzliche Pflicht besteht. Dienstleister erhalten Daten
              nur im Rahmen eines Vertrags zur Auftragsverarbeitung nach Art. 28 DSGVO.
            </p>
            <p>
              <Placeholder>[Hosting, E-Mail-Versand, ggf. Backend und Zahlungsanbieter auflisten]</Placeholder>
            </p>

            <h2>9. Übermittlung in Drittländer</h2>
            <p>
              Eine Übermittlung in Länder außerhalb der EU oder des EWR findet nur statt, wenn ein
              Angemessenheitsbeschluss oder geeignete Garantien nach Art. 44 ff. DSGVO vorliegen.{' '}
              <Placeholder>[Zutreffendes ergänzen oder streichen]</Placeholder>
            </p>

            <h2>10. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
              nötig ist oder eine gesetzliche Frist es verlangt. Angaben zum frühen Zugang löschen
              wir nach Abschluss der Einladung oder auf deinen Wunsch. Server-Logfiles löschen wir
              nach <Placeholder>[Frist]</Placeholder>.
            </p>

            <h2>11. Deine Rechte</h2>
            <ul>
              <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Für alle Anfragen genügt eine E-Mail an{' '}
              <a href="mailto:hello@healthgraph.shop">hello@healthgraph.shop</a>.
            </p>

            <h2>12. Beschwerderecht</h2>
            <p>
              Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren, insbesondere in dem
              Bundesland, in dem du wohnst oder arbeitest, oder bei der Behörde unseres Sitzes:{' '}
              <Placeholder>[zuständige Aufsichtsbehörde]</Placeholder>.
            </p>

            <h2>13. Keine automatisierte Entscheidung</h2>
            <p>
              Wir treffen keine Entscheidungen, die ausschließlich auf einer automatisierten
              Verarbeitung beruhen und dir gegenüber rechtliche Wirkung entfalten oder dich in
              ähnlicher Weise erheblich beeinträchtigen. Hinweise und Prioritäten in der App sind
              Vorschläge, keine Entscheidungen über dich.
            </p>

            <h2>14. Datensicherheit</h2>
            <p>
              Die Website wird über eine verschlüsselte Verbindung (TLS) ausgeliefert. Zugänge zu
              Systemen sind beschränkt, Daten werden nach dem Stand der Technik geschützt. Absolute
              Sicherheit gibt es im Internet nicht; wir melden uns, wenn ein Vorfall deine Daten
              betrifft und gesetzliche Pflichten greifen.
            </p>

            <h2>15. Änderungen</h2>
            <p>
              Wir passen diese Hinweise an, wenn sich die Website, die App oder die Rechtslage
              ändert. Es gilt die jeweils hier veröffentlichte Fassung.
            </p>

            <p className="mt-8 text-[11px] text-ink/30">Stand: 26. Oktober 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
