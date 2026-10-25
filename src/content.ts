export type IconName =
  | 'pulse'
  | 'moon'
  | 'pill'
  | 'graph'
  | 'document'
  | 'mic'
  | 'shield'
  | 'lock'
  | 'download'
  | 'trash'
  | 'sparkle'
  | 'arrow'
  | 'check'
  | 'menu'
  | 'close'
  | 'chevron'
  | 'search'
  | 'mail'
  | 'phone'
  | 'body'
  | 'clock'
  | 'family'
  | 'voice'
  | 'scale'
  | 'barcode'
  | 'heart'
  | 'eye'
  | 'plus'
  | 'person';

export interface NavLink {
  label: string;
  href: string;
}

export const nav = {
  links: [
    { label: 'Funktionen', href: '/#funktionen' },
    { label: 'App', href: '/#app' },
    { label: 'Alltag', href: '/#alltag' },
    { label: 'Privatsphäre', href: '/#privatsphaere' },
    { label: 'Preise', href: '/#preise' },
    { label: 'Antworten', href: '/antworten/' },
  ] as NavLink[],
  cta: 'Früher Zugang',
  skip: 'Zum Inhalt springen',
};

export const hero = {
  kicker: 'Gesundheit, die zusammenhängt',
  titleA: 'Gesundheit,',
  titleB: 'verbunden.',
  sub: 'Puls per Kamera. Schlaf, Medikamente, Essen, Zyklus und Befunde in einem Graph. Frag deine eigenen Daten, was sie bedeuten. Alles bleibt zuerst auf deinem Handy.',
  primary: 'Kostenlos starten',
  secondary: 'So funktioniert’s',
  note: 'Für Android · Kein Wearable nötig · DSGVO-konform',
  chips: ['Puls 62', 'HRV 48 ms', 'Schlaf 7 h 20', '3 Dosen erfasst'],
  stats: [
    { value: '16', label: 'Funktionen' },
    { value: '1', label: 'Graph' },
    { value: '0 €', label: 'zum Start' },
    { value: 'Lokal', label: 'zuerst' },
  ],
};

export const problem = {
  kicker: 'Das Problem',
  title: 'Zehn Apps. Kein Zusammenhang.',
  lead: 'Schlaf in einer App. Essen in einer anderen. Medikamente im Kalender. Befunde im Ordner. Jede Stelle weiß ein Stück, keine kennt das Ganze.',
  apps: [
    'Schlaf',
    'Kalorien',
    'Medikamente',
    'Zyklus',
    'Laufen',
    'Meditation',
    'Wasser',
    'Symptome',
    'Dokumente',
    'Gewohnheiten',
  ],
  punch: 'Zehn Abos. Meist mehr als 40 € im Monat. HealthGraph startet bei 0 €.',
  solutionTitle: 'Ein Graph. Alle Zusammenhänge.',
  solutionBody:
    'Schlaf erklärt Morgen. Essen erklärt Nachmittage. Medikamente erklären die flachen Wochen. Zum ersten Mal liegt alles am selben Ort.',
  cta: 'Kostenlos starten',
};

export interface CapabilityItem {
  name: string;
  desc: string;
  detail: string;
  icon: IconName;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  items: CapabilityItem[];
}

export const capabilities = {
  kicker: 'Sechzehn Funktionen',
  title: 'Alles, was zusammengehört.',
  sub: 'Jede Funktion ersetzt eine App, für die du sonst zahlst. Zusammen ergeben sie ein Bild, das keine einzelne App liefern kann.',
  groups: [
    {
      id: 'messen',
      title: 'Messen',
      kicker: '01',
      blurb: 'Was du ohnehin misst, landet an einem Ort. Ohne Zusatzgerät.',
      items: [
        {
          name: 'Kamera-Puls',
          desc: 'Finger auf die Linse, 60 Sekunden. Herzfrequenz und HRV, ohne Uhr oder Brustgurt.',
          detail:
            'Die App liest feine Farbveränderungen deiner Haut, dieselbe Photoplethysmographie wie im Krankenhaus, nur ohne Clip am Finger. Morgen- und Abendmessungen bilden deine HRV-Basis. Danach kann der Bereitschaftswert dich überhaupt erst einschätzen.',
          icon: 'pulse',
        },
        {
          name: 'Gesichts-Puls',
          desc: 'Ein kurzes Video reicht. Die Messung läuft auf deinem Gerät, dein Gesicht wird nicht hochgeladen.',
          detail:
            'Handy aufstellen, eine halbe Minute hineinschauen. Dasselbe Hautfarb-Signal, diesmal vom Gesicht gelesen. Jeder Frame wird am Gerät ausgewertet und nicht gespeichert.',
          icon: 'eye',
        },
        {
          name: 'Vitalwerte',
          desc: 'Blutdruck, Blutzucker, Gewicht, Temperatur. Einmal eintragen, dauerhaft im Verlauf.',
          detail:
            'Vier Werte, je zehn Sekunden. Jeder Eintrag bekommt einen Zeitstempel und landet im Graph. Dein 7-Tage-Blutdruckmittel und dein Gewichtstrend sind einen Tipp entfernt, bereit für den Arztbesuch.',
          icon: 'scale',
        },
        {
          name: 'Essen & Barcode',
          desc: 'Barcode scannen, Makros aus Open Food Facts. Danach funktioniert der Scan auch ohne Empfang.',
          detail:
            'Open Food Facts ist frei, offen und enthält Millionen Produkte. Der erste Scan lädt die Makros, jeder weitere funktioniert offline. Deine meistgescannten Produkte bleiben auf dem Handy.',
          icon: 'barcode',
        },
      ],
    },
    {
      id: 'verstehen',
      title: 'Verstehen',
      kicker: '02',
      blurb: 'Aus einzelnen Werten werden Zusammenhänge, die du sonst nicht siehst.',
      items: [
        {
          name: 'Gesundheitsgraph',
          desc: 'Schlaf, Medikamente, Essen, Zyklus, Stimmung. Jeder Eintrag landet in einem verbundenen Graph.',
          detail:
            'Sechzehn Funktionen schreiben in einen Zeitstrahl. Dem Graph ist egal, auf welchem Screen du warst. Schlechte Nacht, vergessene Dosis und schwerer Dienstag liegen nebeneinander. Muster werden sichtbar.',
          icon: 'graph',
        },
        {
          name: 'Sieben Blickwinkel',
          desc: 'Herz, Schlaf, Fitness, Ernährung, Gewicht, Wohlbefinden, Disziplin. Jeder Blickwinkel macht aus Daten einen nächsten Schritt.',
          detail:
            'Jeder Blickwinkel beobachtet seine eigenen Signale und meldet sich nur, wenn es etwas zu sagen gibt. Ein klarer nächster Schritt statt eines Armaturenbretts voller Zeiger.',
          icon: 'sparkle',
        },
        {
          name: 'Verläufe & Zeitstrahl',
          desc: 'Scroll Monate zurück und sieh, wie Gewohnheiten wirken. Oder in welcher Woche alles gekippt ist.',
          detail:
            'Jede Messung bleibt erhalten. Sieh, wie der Ruhepuls über einen Trainingsblock sinkt, oder finde die Woche, in der das Abendsnacken anfing. Erinnerung schlägt Motivation.',
          icon: 'clock',
        },
        {
          name: 'Sanotts KI',
          desc: 'Frag in normalen Worten und bekomm Antworten mit Belegen aus deinen eigenen Einträgen.',
          detail:
            'Die KI sieht nur deine Daten. Sie surft nicht, rät nicht und schmeichelt nicht. Wenn deine Daten keine Antwort hergeben, sagt sie das.',
          icon: 'sparkle',
        },
      ],
    },
    {
      id: 'verwalten',
      title: 'Verwalten',
      kicker: '03',
      blurb: 'Alles, was du im Blick behalten musst, ohne Zettel und Ordner.',
      items: [
        {
          name: 'Medikamente',
          desc: 'Pläne, Dosen, Vorrat. Erinnerungen, die deinen Vorrat kennen.',
          detail:
            'Pläne mit Dosen-Erfassung und Nachfüll-Erinnerungen, die deinen Vorrat herunterzählen. Schlummern mit Grund, und der Graph unterscheidet zwischen vergessen und bewusst ausgelassen.',
          icon: 'pill',
        },
        {
          name: 'Familienfreigabe',
          desc: 'Du wählst, wer welche Dosis sieht. Benachrichtigt wird nur, wenn du tippst.',
          detail:
            'Du lädst jemanden ein, dem du vertraust, und legst fest, welche Medikamente sichtbar sind. Bei einer verpassten Dosis öffnet ein Tipp deine Nachrichten-App mit fertigem Text. Automatisch wird nichts gesendet.',
          icon: 'family',
        },
        {
          name: 'Medizinische Dokumente',
          desc: 'Befunde und Rezepte scannen, durchsuchen wie E-Mails. Verschlüsselt, beim Logout gelöscht.',
          detail:
            'Labor-PDFs, Rezepte, Entlassbriefe. Fotografiert, per Texterkennung durchsuchbar, nach Datum abgelegt. Die Frage nach dem Cholesterinwert im März beantwortet die Suche, nicht ein Ordner.',
          icon: 'document',
        },
        {
          name: 'Schlaf & Erholung',
          desc: 'Nächte, Nickerchen, Bett- und Aufstehzeiten. Sieh, welche Abende dir gute Morgen kaufen.',
          detail:
            'Bettzeit, Aufstehzeit, Nickerchen und Notizen zur Qualität. Die App verbindet Nächte mit der Energie am nächsten Tag, bis deine persönliche Formel sichtbar wird.',
          icon: 'moon',
        },
      ],
    },
    {
      id: 'handeln',
      title: 'Handeln',
      kicker: '04',
      blurb: 'Kleine Schritte, die aus deinen Daten folgen. Nicht aus einem Kalender.',
      items: [
        {
          name: 'Sprach-Check-ins',
          desc: 'Ein Anruf am Tag. Eine Minute reden, dein Zeitstrahl füllt sich.',
          detail:
            'Die Stimme fragt, du antwortest, der Zeitstrahl füllt sich: Schlaf, Medikamente, Stimmung, Symptome. Ein verpasster Anruf wird einmal wiederholt, danach ist Ruhe.',
          icon: 'phone',
        },
        {
          name: 'Sprach-Alarme',
          desc: 'Erinnerungen, die du einfach beantwortest. Kein Tippen, kein Entsperren.',
          detail:
            'Der Alarm fragt: Mittagsdosis genommen? Antwortest du mit Ja, ist sie mit Zeitstempel erfasst. Kein Entsperren, kein Nachtragen.',
          icon: 'voice',
        },
        {
          name: '3D-Körper',
          desc: 'Anatomie-Ansicht, direkt mit deinem Graph verbunden. Tipp auf eine Zone, sieh deine Daten.',
          detail:
            'Männliche und weibliche Modelle mit sieben Organen, im Projekt erzeugt und in der App enthalten. Kein Download, keine Lizenz, funktioniert im Flugmodus.',
          icon: 'body',
        },
        {
          name: 'Deine Datenrechte',
          desc: 'Alles exportieren oder löschen, jederzeit, mit einem Tipp.',
          detail:
            'Ein Tipp exportiert alles in offenen Formaten, ein Tipp löscht alles. Keine Aufbewahrungstricks, kein Support-Ticket zum Löschen. Gehen ist leicht.',
          icon: 'download',
        },
      ],
    },
  ] as CapabilityGroup[],
  footnote: 'Sechzehn Funktionen. Ein Graph. Keine App für jede Lebenslage.',
};

export const screens = {
  kicker: 'Die App',
  title: 'Drei Screens. Ein Graph.',
  sub: 'Heute, Zusammenhänge, Check-in. Mehr braucht es nicht, um den Überblick zu behalten.',
  items: [
    {
      title: 'Heute',
      caption: 'Puls, Schlaf, Medikamente und Stimmung auf einem Screen.',
    },
    {
      title: 'Zusammenhänge',
      caption: 'Der Graph zeigt, was zusammengehört. Ohne Sortieren, ohne Export.',
    },
    {
      title: 'Check-in',
      caption: 'Sechzig Sekunden, per Stimme oder Tipp. Danach ist der Tag erfasst.',
    },
  ],
};

export const day = {
  kicker: 'Alltag',
  title: 'Ein Tag, der sich kaum wie ein Tagebuch anfühlt.',
  sub: 'Nichts, was du zusätzlich pflegst. Ein Rhythmus, der nebenbei läuft.',
  moments: [
    {
      time: '07:12',
      title: 'Aufwachen',
      text: 'Dein Wecker spricht. Du antwortest im Halbschlaf: schlecht geschlafen, Schulter zieht. Gespeichert, bevor deine Füße den Boden berühren.',
      icon: 'mic' as IconName,
    },
    {
      time: '08:05',
      title: 'Frühstück',
      text: 'Frühstücks-Barcode, ein Scan. Haferflocken, wie immer. Dein Handy kennt das Produkt. Kein Empfang nötig.',
      icon: 'barcode' as IconName,
    },
    {
      time: '13:40',
      title: 'Mittagsdosis',
      text: 'Die Mittagsdosis war um 13:00 fällig. Ein Tipp benachrichtigt deine Schwester. Sie schreibt zurück: stolz auf dich.',
      icon: 'pill' as IconName,
    },
    {
      time: '19:22',
      title: 'Pulsmessung',
      text: 'Finger auf die Kamera, sechzig Sekunden. Puls, HRV, fertig, während das Nudelwasser kocht.',
      icon: 'pulse' as IconName,
    },
    {
      time: '22:47',
      title: 'Der Blick zurück',
      text: 'Der Graph zeigt es schlicht: Kurze Nächte häufen sich vor schweren Tagen. Morgen schützt du den Abend.',
      icon: 'graph' as IconName,
    },
  ],
};

export const privacy = {
  kicker: 'Privatsphäre',
  title: 'Deine Daten bleiben deine.',
  sub: 'Zuerst auf deinem Handy. Die Cloud ist ein Backup, das du kontrollierst, kein Geschäftsmodell.',
  points: [
    {
      title: 'Am Gerät',
      text: 'Kamera-Puls, Gesichts-Puls und der Graph selbst laufen auf deinem Handy. Nur was du willst, geht in die Cloud.',
      icon: 'phone' as IconName,
    },
    {
      title: 'Verschlüsselt',
      text: 'Zwischengespeicherte Dateien sind verschlüsselt und werden beim Logout gelöscht. Verlierst du dein Handy, bleibt deine Gesundheitsgeschichte geschützt.',
      icon: 'lock' as IconName,
    },
    {
      title: 'DSGVO-konform',
      text: 'Export und Löschung mit einem Tipp. Deine Gesundheitsdaten werden nicht verkauft. Wir müssten sie dafür erst haben, und das tun wir nicht.',
      icon: 'shield' as IconName,
    },
    {
      title: 'Ohne Werbe-Tracking',
      text: 'Keine Werbe-Cookies, kein Profil für Dritte. Diese Website setzt keine Analyse-Cookies und lädt keine externen Schriftarten.',
      icon: 'eye' as IconName,
    },
  ],
  badges: ['DSGVO-konform', 'Kein Verkauf von Daten', 'Löschen mit einem Tipp'],
  footer:
    'Gesundheitsdaten sind besonders sensible Daten. HealthGraph ist deshalb zuerst ein lokales Produkt. Die vollständigen Hinweise stehen in der Datenschutzerklärung.',
};

export interface Tier {
  name: string;
  price: string;
  per: string;
  cta: string;
  features: string[];
  best?: boolean;
}

export const pricing = {
  kicker: 'Preise',
  title: 'Faire Preise.',
  sub: 'Starte kostenlos. Zahle erst, wenn die Profi-Funktionen dir etwas bringen. Jederzeit kündbar.',
  note: 'Alle Preise inkl. MwSt. Keine Kreditkarte für den kostenlosen Start.',
  tiers: [
    {
      name: 'Kostenlos',
      price: '0 €',
      per: 'für immer',
      cta: 'Kostenlos starten',
      features: [
        'Tägliches Erfassen & Check-ins',
        'Medikamente & Dosenverlauf',
        'Zeitstrahl & Verlauf',
        '3 Essens-Scans pro Monat',
        '2 KI-Nachrichten pro Monat',
      ],
    },
    {
      name: 'General',
      price: '11 €',
      per: 'pro Monat',
      cta: 'General wählen',
      best: true,
      features: [
        'Alles aus Kostenlos, unbegrenzt',
        'Kamera-Puls (PPG)',
        'Gesundheitsgraph & Zusammenhänge',
        'Sieben Blickwinkel',
        '4 Dokument-Scans pro Monat',
        'Unbegrenzte Essens-Scans',
      ],
    },
    {
      name: 'All-in',
      price: '18 €',
      per: 'pro Monat',
      cta: 'All-in wählen',
      features: [
        'Alles aus General',
        'Gesichts-Puls (rPPG)',
        '3D-Körper inklusive',
        'Sprach-Alarme & Anruf-Erinnerungen',
        'Unbegrenzter KI-Chat',
        'Unbegrenzte Dokument-Scans',
      ],
    },
  ] as Tier[],
  recommended: 'Empfohlen',
};

export const faq = {
  kicker: 'Ehrliche Fragen',
  title: 'Bevor du dich einträgst.',
  sub: 'Gefragt von Menschen, die mit Gesundheits-Apps schon einmal enttäuscht wurden.',
  items: [
    {
      q: 'Ist HealthGraph ein Medizinprodukt?',
      a: 'Nein. HealthGraph ist ein Wellness-Begleiter, kein Arzt. Die App diagnostiziert nichts, stuft nichts ein und behandelt nichts. Was klinisch aussieht, gehört vor deine Ärztin oder deinen Arzt.',
    },
    {
      q: 'Wo werden meine Daten gespeichert?',
      a: 'Zuerst auf deinem Handy. Kamera- und Gesichts-Puls verlassen es nie. Was du in die Cloud gibst, ist verschlüsselt. Export und Löschung gehen jederzeit mit einem Tipp.',
    },
    {
      q: 'Was kostet HealthGraph wirklich?',
      a: 'Kostenlos starten heißt kostenlos bleiben. Die kostenlose Stufe enthält Erfassen, Medikamente, Zeitstrahl, drei Essens-Scans und zwei KI-Nachrichten pro Monat. General und All-in schalten die Profi-Funktionen frei.',
    },
    {
      q: 'Brauche ich eine Smartwatch?',
      a: 'Nein. Der Finger auf der Kamera liefert Puls und HRV in sechzig Sekunden. Ein kurzes Video reicht für den Gesichts-Puls. Eine Uhr ist willkommen, aber nicht nötig.',
    },
    {
      q: 'Wie funktioniert die Familienfreigabe?',
      a: 'Du lädst jemanden ein, dem du vertraust, und wählst, welche Medikamente sichtbar sind. Bei einer verpassten Dosis öffnet ein Tipp deine Nachrichten-App mit fertigem Text. Automatisch wird nichts gesendet.',
    },
    {
      q: 'Auf welchen Geräten läuft HealthGraph?',
      a: 'Der frühe Zugang läuft auf Android. Deine Einladung sagt dir genau, was du installieren musst. Eine iOS-Version ist nicht versprochen, solange sie nicht fertig ist.',
    },
  ],
  allAnswers: 'Alle Antworten lesen',
};

export const earlyAccess = {
  kicker: 'Früher Zugang',
  title: 'Sichere dir einen Platz.',
  sub: 'Wir öffnen die App in kleinen Gruppen. Trag dich ein, wir schreiben dir per E-Mail, sobald dein Platz frei ist.',
  note: 'Was wir brauchen: deine E-Mail-Adresse. Mehr nicht.',
  optionalNote:
    'Name und Stadt sind freiwillig. Sie helfen uns, die ersten Gruppen nach Region zusammenzustellen.',
  nameLabel: 'Name (optional)',
  emailLabel: 'E-Mail-Adresse',
  cityLabel: 'Stadt (optional)',
  namePlaceholder: 'Wie heißt du?',
  emailPlaceholder: 'name@beispiel.de',
  cityPlaceholder: 'z. B. Hamburg',
  submit: 'Platz sichern',
  submitting: 'Wird gesendet…',
  successTitle: 'Du bist auf der Liste.',
  successBody: 'Wir schreiben dir an deine E-Mail-Adresse, sobald dein Platz frei ist.',
  error: 'Das hat nicht geklappt. Prüf deine Verbindung und versuch es noch einmal.',
  helper: 'Nur für deine Einladung. Keine Werbung. Jederzeit abbestellbar.',
  emailError: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
  consentError: 'Bitte bestätige die Datenschutzhinweise.',
  consentBefore: 'Ich stimme zu, dass HealthGraph meine Angaben verwendet, um mir eine Einladung zu schicken. Details in der ',
  consentLink: 'Datenschutzerklärung',
  consentAfter: '.',
  contactNote: 'Lieber direkt schreiben? ',
  contactEmail: 'hello@healthgraph.shop',
};

export const footer = {
  tagline: 'Gesundheit, die zusammenhängt.',
  blurb: 'Ein privater Gesundheitsgraph für Puls, Schlaf, Medikamente, Ernährung, Zyklus und Befunde. Für Android.',
  columns: [
    {
      title: 'Produkt',
      links: [
        { label: 'Funktionen', href: '/#funktionen' },
        { label: 'Die App', href: '/#app' },
        { label: 'Alltag', href: '/#alltag' },
        { label: 'Preise', href: '/#preise' },
        { label: 'Früher Zugang', href: '/#zugang' },
      ],
    },
    {
      title: 'Wissen',
      links: [
        { label: '54 Antworten', href: '/antworten/' },
        { label: 'Datenschutz', href: '/datenschutz/' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { label: 'Impressum', href: '/impressum/' },
        { label: 'Datenschutz', href: '/datenschutz/' },
      ],
    },
  ] as { title: string; links: NavLink[] }[],
  contactLabel: 'Kontakt',
  contactEmail: 'hello@healthgraph.shop',
  disclaimer:
    'HealthGraph ist ein Wellness-Begleiter, kein Medizinprodukt. Keine Diagnosen, keine Heilaussagen, keine medizinische Beratung.',
  rights: 'Alle Rechte vorbehalten.',
  madeFor: 'Für Deutschland gebaut. DSGVO von Anfang an.',
};
