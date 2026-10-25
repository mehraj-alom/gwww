export interface Answer {
  slug: string;
  category: string;
  q: string;
  a: string;
}

export const answerCategories = [
  'Puls & Herz',
  'Schlaf & Erholung',
  'Medikamente & Pflege',
  'Ernährung & Gewicht',
  'Zyklus & Wohlbefinden',
  'Daten & Preise',
  'Über HealthGraph',
] as const;

export const answers: Answer[] = [
  {
    slug: 'puls-mit-handykamera-messen',
    category: 'Puls & Herz',
    q: 'Wie messe ich meinen Puls mit der Handykamera?',
    a: 'Du legst die Fingerkuppe für 60 Sekunden auf die Kameralinse. Die App liest die feinen Farbveränderungen deiner Haut und berechnet daraus Herzfrequenz und HRV. Eine Uhr oder ein Brustgurt ist nicht nötig.',
  },
  {
    slug: 'puls-per-selfie-video',
    category: 'Puls & Herz',
    q: 'Funktioniert der Puls auch per Selfie-Video?',
    a: 'Ja. Du stellst das Handy auf und schaust etwa 30 Sekunden hinein. Jeder Frame wird auf dem Gerät ausgewertet und nicht gespeichert. Das Video verlässt dein Handy nicht.',
  },
  {
    slug: 'puls-ohne-smartwatch',
    category: 'Puls & Herz',
    q: 'Brauche ich eine Smartwatch für Puls und HRV?',
    a: 'Nein. Dein Handy reicht. Eine Uhr ist willkommen, aber keine Voraussetzung. HealthGraph ist bewusst so gebaut, dass die Technik, die du schon hast, genügt.',
  },
  {
    slug: 'was-ist-hrv',
    category: 'Puls & Herz',
    q: 'Was ist HRV und warum ist sie wichtig?',
    a: 'Die Herzratenvariabilität beschreibt, wie stark sich der Abstand zwischen Herzschlägen verändert. Grob gesagt zeigt sie, wie belastbar dein Körper gerade ist. Einzelne Werte sagen wenig; interessant ist dein eigener Verlauf über Wochen.',
  },
  {
    slug: 'wie-genau-ist-kamera-puls',
    category: 'Puls & Herz',
    q: 'Wie genau ist die Messung mit der Kamera?',
    a: 'Für Ruhepuls und HRV ist die Methode brauchbar, wenn du still hältst und gutes Licht hast. Sie ersetzt kein EKG und keine medizinische Messung. Bei unklaren Werten gehört die Frage zu deiner Ärztin oder deinem Arzt.',
  },
  {
    slug: 'puls-offline-messen',
    category: 'Puls & Herz',
    q: 'Kann ich den Puls ohne Internet messen?',
    a: 'Ja. Die Auswertung läuft auf deinem Gerät. Du kannst im Flugmodus messen; die Werte landen trotzdem im Graph.',
  },
  {
    slug: 'unruhige-haende-messung',
    category: 'Puls & Herz',
    q: 'Was kann ich bei unruhigen Händen tun?',
    a: 'Leg das Handy auf eine feste Unterlage und halte die Fingerkuppe nur leicht auf. Schon kleine Bewegungen stören das Signal. Wenn es nicht klappt, versuch es später noch einmal in Ruhe.',
  },
  {
    slug: 'blutdruck-mit-handy-messen',
    category: 'Puls & Herz',
    q: 'Misst HealthGraph meinen Blutdruck?',
    a: 'Nein. HealthGraph misst keinen Blutdruck. Du trägst die Werte deiner Oberarmmanschette ein, mit Zeitstempel und Verlauf. So hast du dein 7-Tage-Mittel griffbereit, ohne Zettelwirtschaft.',
  },
  {
    slug: 'pulsdaten-fuer-den-arzt',
    category: 'Puls & Herz',
    q: 'Wie bereite ich meine Pulsdaten für den Arztbesuch vor?',
    a: 'Du exportierst deinen Verlauf in einem offenen Format und nimmst ihn mit. Praktisch sind ein ruhiger Ruhepuls-Verlauf und ein paar Notizen zu Schlaf und Medikamenten. Die App ersetzt kein Gespräch, aber sie liefert die Zahlen.',
  },
  {
    slug: 'ruhepuls-schwankt',
    category: 'Puls & Herz',
    q: 'Warum schwankt mein Ruhepuls von Tag zu Tag?',
    a: 'Schlaf, Alkohol, Stress, Krankheit und Training wirken alle darauf ein. Deshalb ist ein einzelner Wert wenig aussagekräftig. Der Graph zeigt dir, ob eine Schwankung einmalig ist oder ein Muster hat.',
  },

  {
    slug: 'schlaf-ohne-uhr-erfassen',
    category: 'Schlaf & Erholung',
    q: 'Kann ich Schlaf ohne Uhr oder Ring erfassen?',
    a: 'Ja. Du trägst Bettzeit, Aufstehzeit, Nickerchen und eine kurze Notiz zur Qualität ein. Das dauert Sekunden. Die App verbindet die Nächte mit deiner Energie am nächsten Tag.',
  },
  {
    slug: 'muede-trotz-acht-stunden',
    category: 'Schlaf & Erholung',
    q: 'Warum bin ich müde, obwohl ich acht Stunden geschlafen habe?',
    a: 'Die Dauer ist nur ein Teil. Bettzeit, Unterbrechungen, Alkohol und ein unruhiger Rhythmus können eine Nacht weniger erholsam machen. Frag die KI nach deinen letzten Nächten, statt nach einer allgemeinen Regel zu suchen.',
  },
  {
    slug: 'beste-bettzeit-finden',
    category: 'Schlaf & Erholung',
    q: 'Welche Bettzeit bringt mir wirklich einen guten Morgen?',
    a: 'Das ist individuell. HealthGraph paart deine Bettzeiten mit der Energie am Folgetag, bis dein eigenes Muster sichtbar wird. Die allgemeine Acht-Stunden-Regel kann dabei nur der Startpunkt sein.',
  },
  {
    slug: 'nickerchen-erkennen',
    category: 'Schlaf & Erholung',
    q: 'Wie erkenne ich, ob ein Nickerchen mir hilft?',
    a: 'Du erfasst Nickerchen mit Dauer und notierst abends deine Energie. Nach ein paar Wochen siehst du, ob kurze Nickerchen dich tragen oder den Abend unruhig machen.',
  },
  {
    slug: 'schlaftagebuch-fuer-den-arzt',
    category: 'Schlaf & Erholung',
    q: 'Hilft ein Schlaftagebuch beim Arzt?',
    a: 'Ja, oft mehr als eine vage Erinnerung. Ein Verlauf über Wochen zeigt Bettzeiten, Unterbrechungen und Tagesmüdigkeit. Das ist keine Diagnose, aber eine gute Grundlage für das Gespräch.',
  },
  {
    slug: 'bereitschaftswert-bedeutung',
    category: 'Schlaf & Erholung',
    q: 'Was bedeutet der Bereitschaftswert?',
    a: 'Er fasst deine HRV-Basis, die letzte Nacht und deinen Ruhepuls zu einer Orientierung zusammen. Er ist kein medizinischer Wert und keine Erlaubnis, deinen Körper zu ignorieren. Wenn du dich schlecht fühlst, gilt dein Gefühl.',
  },

  {
    slug: 'medikamenten-erinnerung',
    category: 'Medikamente & Pflege',
    q: 'Wie erinnert mich HealthGraph an Medikamente?',
    a: 'Du legst einen Plan mit Uhrzeiten an. Die App erinnert dich zur richtigen Zeit und du hakst die Dosis mit einem Tipp ab. Bei Bedarf kannst du dir den Vorrat herunterzählen lassen.',
  },
  {
    slug: 'dosis-vergessen',
    category: 'Medikamente & Pflege',
    q: 'Was passiert, wenn ich eine Dosis vergesse?',
    a: 'Du kannst sie mit einem Grund nachtragen oder als ausgelassen markieren. Der Graph unterscheidet zwischen vergessen und bewusst ausgelassen. Verpasste Dosen werden nicht automatisch an andere gesendet.',
  },
  {
    slug: 'familienfreigabe-medikamente',
    category: 'Medikamente & Pflege',
    q: 'Wie funktioniert die Familienfreigabe?',
    a: 'Du lädst eine Person ein, der du vertraust, und wählst aus, welche Medikamente sichtbar sind. Bei einer verpassten Dosis öffnet ein Tipp deine Nachrichten-App mit einem fertigen Text. Gesendet wird erst, wenn du es abschickst.',
  },
  {
    slug: 'vorrat-nachfuellen',
    category: 'Medikamente & Pflege',
    q: 'Zählt die App meinen Vorrat mit?',
    a: 'Ja, wenn du den Vorrat beim Anlegen hinterlegst. Jede erfasste Dosis zählt ihn herunter. Rechtzeitig vor dem Ende erinnert dich die App, damit du nicht sonntags ohne Tabletten dastehst.',
  },
  {
    slug: 'mehrere-medikamente-erfassen',
    category: 'Medikamente & Pflege',
    q: 'Kann ich mehrere Medikamente schnell erfassen?',
    a: 'Ja. Dosen lassen sich in einer Liste abhaken, statt jede einzeln zu öffnen. Für den Alltag ist das der Unterschied zwischen „mache ich später“ und „ist erledigt“.',
  },
  {
    slug: 'sprach-alarme-medikamente',
    category: 'Medikamente & Pflege',
    q: 'Was sind Sprach-Alarme?',
    a: 'Statt eines Pieptons fragt dich eine Stimme, ob du die Dosis genommen hast. Du antwortest im Gespräch, und die Dosis wird mit Zeitstempel erfasst. Das ist Teil von All-in.',
  },
  {
    slug: 'befunde-und-rezepte-organisieren',
    category: 'Medikamente & Pflege',
    q: 'Wie organisiere ich Laborbefunde und Rezepte?',
    a: 'Du fotografierst oder lädst das Dokument hoch. HealthGraph erkennt den Text, legt es nach Datum ab und macht es durchsuchbar. Die Originaldatei bleibt erhalten.',
  },
  {
    slug: 'dokumente-durchsuchen',
    category: 'Medikamente & Pflege',
    q: 'Kann ich in meinen Dokumenten suchen?',
    a: 'Ja. Statt Ordner zu wühlen, fragst du nach einem Wert oder einem Begriff. Die Suche findet die Stelle im Dokument, statt dich durch PDFs zu scrollen.',
  },
  {
    slug: 'dokumente-beim-logout',
    category: 'Medikamente & Pflege',
    q: 'Was passiert beim Logout mit meinen Dokumenten?',
    a: 'Zwischengespeicherte Dateien sind verschlüsselt und werden beim Logout vom Gerät gelöscht. Deine Ablage bleibt in deinem Konto erhalten, der lokale Zwischenspeicher nicht.',
  },

  {
    slug: 'barcode-scan-essen',
    category: 'Ernährung & Gewicht',
    q: 'Wie funktioniert der Barcode-Scan?',
    a: 'Du hältst den Barcode in die Kamera. HealthGraph lädt die Nährwerte aus Open Food Facts und speichert das Produkt auf deinem Handy. Beim nächsten Scan geht es auch ohne Empfang.',
  },
  {
    slug: 'barcode-ohne-empfang',
    category: 'Ernährung & Gewicht',
    q: 'Geht der Barcode-Scan im Supermarktkeller ohne Empfang?',
    a: 'Ja, bei Produkten, die du schon einmal gescannt hast. Die Nährwerte liegen dann lokal auf dem Gerät. Nur ein völlig neues Produkt braucht beim ersten Scan eine Verbindung.',
  },
  {
    slug: 'naehrwerte-quelle',
    category: 'Ernährung & Gewicht',
    q: 'Woher kommen die Nährwerte?',
    a: 'Aus Open Food Facts, einer offenen Datenbank mit Produkten aus vielen Ländern. Die Daten sind nicht perfekt, aber transparent und kostenlos. Bei abweichenden Angaben auf der Packung gilt die Packung.',
  },
  {
    slug: 'gewicht-und-ernaehrung',
    category: 'Ernährung & Gewicht',
    q: 'Wie verbinde ich Gewicht und Ernährung?',
    a: 'Waage und Essens-Scans füttern denselben Graph. Du siehst, wie sich Mahlzeiten und Gewicht über Wochen verhalten, statt zwei getrennte Tagebücher zu führen.',
  },
  {
    slug: 'abendsnacken-muster',
    category: 'Ernährung & Gewicht',
    q: 'Warum snacke ich abends immer?',
    a: 'Vielleicht ist es ein Muster aus langen Tagen, wenig Schlaf oder unregelmäßigen Mahlzeiten. Der Graph zeigt dir, wann es anfing und was zeitlich zusammenfiel. Erinnerung ist oft hilfreicher als ein weiterer Vorsatz.',
  },
  {
    slug: 'ernaehrung-ohne-tippen',
    category: 'Ernährung & Gewicht',
    q: 'Kann ich Essen erfassen, ohne alles zu tippen?',
    a: 'Ja. Barcode scannen, bekannte Produkte wiederverwenden, per Stimme ergänzen. Ziel ist, dass die Erfassung weniger kostet als der Nutzen, sonst lässt du sie nach zwei Wochen bleiben.',
  },

  {
    slug: 'zyklus-privat',
    category: 'Zyklus & Wohlbefinden',
    q: 'Wie privat ist die Zyklus-Erfassung?',
    a: 'Die Daten werden zuerst auf deinem Gerät verarbeitet. Wenn du die Cloud-Sicherung nicht aktivierst, verlassen sie das Handy nicht. Export und Löschung sind jederzeit möglich.',
  },
  {
    slug: 'kinderwunsch-schwangerschaft',
    category: 'Zyklus & Wohlbefinden',
    q: 'Gibt es einen Kinderwunsch- oder Schwangerschaftsmodus?',
    a: 'Ja. Neben der Zyklus-Erfassung gibt es Modi für Kinderwunsch und Schwangerschaft. Die fruchtbare Phase wird geplant dargestellt, nicht als medizinische Prognose.',
  },
  {
    slug: 'wechseljahre-symptome',
    category: 'Zyklus & Wohlbefinden',
    q: 'Kann ich Wechseljahre-Symptome festhalten?',
    a: 'Ja. Du kannst Symptome, Schlaf und Stimmung notieren, ohne dass daraus sofort eine Bewertung wird. Über Monate wird sichtbar, was wiederkehrt und was zusammenhängt.',
  },
  {
    slug: 'zyklus-schlaf-stimmung',
    category: 'Zyklus & Wohlbefinden',
    q: 'Wie hängen Zyklus, Schlaf und Stimmung zusammen?',
    a: 'Sie liegen im selben Graph. So siehst du, ob schlechte Nächte und Stimmungstiefs in bestimmten Phasen häufen. Das ist ein Muster, keine Diagnose.',
  },
  {
    slug: 'symptome-per-stimme',
    category: 'Zyklus & Wohlbefinden',
    q: 'Kann ich Stimmung und Symptome per Stimme erfassen?',
    a: 'Ja. Ein kurzer Check-in am Tag reicht. Du sprichst, die App ordnet Schlaf, Stimmung und Symptome ein. Tippen ist weiterhin möglich, wenn dir das lieber ist.',
  },

  {
    slug: 'wo-liegen-meine-daten',
    category: 'Daten & Preise',
    q: 'Wo liegen meine Daten?',
    a: 'Zuerst auf deinem Gerät. Kamera-Puls und Gesichts-Puls verlassen das Handy nicht. Wenn du die Cloud-Sicherung aktivierst, werden die Daten verschlüsselt übertragen und gespeichert. Die Cloud ist ein Backup, kein Geschäftsmodell.',
  },
  {
    slug: 'daten-verkauf',
    category: 'Daten & Preise',
    q: 'Werden meine Gesundheitsdaten verkauft?',
    a: 'Nein. Deine Gesundheitsdaten werden nicht verkauft und nicht zu Werbezwecken weitergegeben. Wir müssten sie dafür erst haben, und auf deinem Gerät haben wir sie nicht.',
  },
  {
    slug: 'daten-loeschen',
    category: 'Daten & Preise',
    q: 'Wie lösche ich meine Daten?',
    a: 'In der App mit einem Tipp. Es gibt kein Support-Ticket und keine versteckte Kündigung. Wenn du dein Konto löschst, werden die zugehörigen Daten gelöscht, soweit keine gesetzlichen Pflichten entgegenstehen.',
  },
  {
    slug: 'daten-exportieren',
    category: 'Daten & Preise',
    q: 'Bekomme ich meine Daten exportiert?',
    a: 'Ja, in gängigen offenen Formaten. Du kannst deinen Verlauf mitnehmen, ohne die App zu fragen. Das ist auch der Grund, warum du bleiben kannst, ohne dich eingesperrt zu fühlen.',
  },
  {
    slug: 'was-kostet-healthgraph',
    category: 'Daten & Preise',
    q: 'Was kostet HealthGraph?',
    a: 'Der kostenlose Tarif kostet 0 € und bleibt kostenlos. General kostet 11 € im Monat, All-in 18 €. Alle Preise inklusive Mehrwertsteuer. Du kannst jederzeit kündigen.',
  },
  {
    slug: 'kostenloser-tarif',
    category: 'Daten & Preise',
    q: 'Was ist im kostenlosen Tarif enthalten?',
    a: 'Tägliches Erfassen und Check-ins, Medikamente mit Dosenverlauf, Zeitstrahl, drei Essens-Scans und zwei KI-Nachrichten pro Monat. Kamera-Puls und der volle Graph gehören zu den bezahlten Stufen.',
  },
  {
    slug: 'general-lohnt-sich',
    category: 'Daten & Preise',
    q: 'Lohnt sich General für 11 €?',
    a: 'Wenn du Kamera-Puls, den vollen Gesundheitsgraphen, die sieben Blickwinkel und unbegrenzte Essens-Scans willst, ja. Wenn du nur Medikamente und Schlaf erfassen möchtest, reicht der kostenlose Tarif.',
  },
  {
    slug: 'all-in-was-drin',
    category: 'Daten & Preise',
    q: 'Was steckt in All-in?',
    a: 'Alles aus General plus Gesichts-Puls, 3D-Körper, Sprach-Alarme, unbegrenzten KI-Chat und unbegrenzte Dokument-Scans. All-in ist für Menschen, die die App als täglichen Begleiter nutzen.',
  },
  {
    slug: 'werbung-und-tracking',
    category: 'Daten & Preise',
    q: 'Gibt es Werbung oder Tracking?',
    a: 'Auf dieser Website nicht. Keine Werbe-Cookies, keine Analyse-Tools, keine externen Schriftarten. In der App gibt es keine Werbung für Dritte.',
  },
  {
    slug: 'medizinprodukt',
    category: 'Daten & Preise',
    q: 'Ist HealthGraph ein Medizinprodukt?',
    a: 'Nein. HealthGraph ist ein Wellness-Begleiter. Die App diagnostiziert nichts, behandelt nichts und ersetzt keine Ärztin oder keinen Arzt. Wenn ein Wert klinisch aussieht, gehört er in eine Praxis.',
  },

  {
    slug: 'geraete-und-sprache',
    category: 'Über HealthGraph',
    q: 'Auf welchen Geräten und in welcher Sprache läuft HealthGraph?',
    a: 'Der frühe Zugang läuft auf Android und ist auf Deutsch. Deine Einladung sagt dir genau, was du installieren musst. Eine iOS-Version ist nicht versprochen, solange sie nicht fertig ist.',
  },
  {
    slug: 'frueher-zugang',
    category: 'Über HealthGraph',
    q: 'Wie bekomme ich frühen Zugang?',
    a: 'Du trägst dich mit Name, E-Mail-Adresse und Stadt ein. Wir schreiben dir, sobald ein Platz frei ist. Meist dauert das einige Tage. Es gibt keine Kreditkarte und keine Warteschlangen-Tricks.',
  },
  {
    slug: 'wer-steckt-dahinter',
    category: 'Über HealthGraph',
    q: 'Wer steckt hinter HealthGraph?',
    a: 'Zwei unabhängige Macher mit Hintergrund in KI, Software, Gesundheitssystemen und Design. Keine Mediziner, keine Heilsversprechen. Wir haben ein Problem gesehen, gelernt und gebaut.',
  },
  {
    slug: 'warum-eine-app-statt-zehn',
    category: 'Über HealthGraph',
    q: 'Warum zehn Apps durch eine ersetzen?',
    a: 'Weil zehn Apps zehn Abos, zehn Logins und zehn getrennte Bilder bedeuten. Keine davon weiß, wie dein Schlaf mit deinen Medikamenten zusammenhängt. Ein Graph kann das.',
  },
  {
    slug: 'was-ist-der-gesundheitsgraph',
    category: 'Über HealthGraph',
    q: 'Was ist der Gesundheitsgraph genau?',
    a: 'Ein Zeitstrahl, in den alle Funktionen schreiben: Puls, Schlaf, Medikamente, Essen, Zyklus, Stimmung, Befunde. Weil alles am selben Ort liegt, kann die App Zusammenhänge zeigen, die einzelne Apps nicht sehen.',
  },
  {
    slug: 'ki-antworten-belege',
    category: 'Über HealthGraph',
    q: 'Woher weiß die KI, was sie antwortet?',
    a: 'Sie arbeitet nur mit deinen Einträgen und nennt die Stellen, auf die sie sich stützt. Wenn deine Daten keine Antwort hergeben, sagt sie das. Sie surft nicht und erfindet keine Werte.',
  },
  {
    slug: '3d-koerper-offline',
    category: 'Über HealthGraph',
    q: 'Funktioniert der 3D-Körper offline?',
    a: 'Ja. Die Modelle sind in der App enthalten und brauchen keinen Download. Du kannst eine Zone antippen und siehst die Daten, die du dazu erfasst hast.',
  },
];

export function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');
}
