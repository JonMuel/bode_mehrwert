# SEO- & GEO-Analyse: bode-mehrwert.de

Stand: 07.07.2026 · Analysiert: Startseite + 7 Unterseiten (Contao CMS)

## Zusammenfassung

Die Seite ist inhaltlich solide und klar auf zwei Zielgruppen ausgerichtet (SHK-Unternehmer, technischer Kundendienst im Mittelstand). Technisch und strategisch bleibt aber viel Potenzial liegen: Fast alle Unterseiten haben keine Meta-Descriptions, es gibt keine strukturierten Daten, keinen Social Proof, keinen Ratgeber-Content und einen kaputten CTA-Link. Die Beratungsanfrage (Kern-Conversion) ist erst weit unten auf den Seiten erreichbar.

---

## 1. Kritische Fehler (sofort beheben)

**Kaputter CTA-Link:** Auf `/mehrwert-beratung` verlinkt „Vereinbaren Sie gleich einen Beratungstermin" auf `/aktuelles` – diese Seite ist leer bzw. existiert nicht. Ausgerechnet der wichtigste Conversion-Link läuft ins Leere. → Auf `/kontakt` umbiegen.

**Fehlende Meta-Descriptions:** Nur die Startseite hat eine. Alle 7 Unterseiten (`/beratung`, `/mehrwert-beratung`, `/beratungspakete`, `/frank-bode`, `/kontakt` …) haben leere Descriptions. Google generiert dann beliebige Snippets – schlechtere Klickraten. → Für jede Seite eine individuelle Description (max. 155 Zeichen) mit Nutzenversprechen und Keyword schreiben.

**Schwache Title-Tags:** Aktuell z. B. „Beratung - BODE Mehrwert-Beratung" – ohne Suchbegriffe. Zwei Seiten heißen identisch „Beratungsprozess". Besser:

| Seite | Vorschlag Title |
|---|---|
| /start | SHK-Unternehmensberatung & Kundendienst-Optimierung – Frank Bode |
| /beratung | Beratung technischer Kundendienst im Mittelstand – BODE Mehrwert-Beratung |
| /mehrwert-beratung | Unternehmensberatung für SHK-Betriebe: Wartung, Ertrag, Nachfolge |
| /beratungspakete | Beratungspakete für SHK-Betriebe: BASIS, PRO, PROPLUS |
| /frank-bode | Frank Bode – Kundendienst-Experte & SHK-Berater (30+ Jahre Erfahrung) |

**Fehlende Alt-Texte:** Sämtliche Bilder haben keine Alt-Attribute. Schlecht für SEO und Barrierefreiheit. → z. B. „Frank Bode, Berater für SHK-Unternehmer und technischen Kundendienst".

**Überschriften-Hierarchie:** Die H1 jeder Seite ist der Logo-Schriftzug „BODE Mehrwert-Beratung". Die eigentlichen Seitenthemen stehen in H2/H3, teils H3 vor H2, teils 8+ H2 pro Seite. → Pro Seite genau eine inhaltliche H1 mit Keyword (z. B. „Beratung für den technischen Kundendienst"), Logo nicht als H1 auszeichnen.

## 2. Strukturierte Daten (SEO + GEO)

Es gibt kein Schema.org-Markup. Empfohlen (als JSON-LD):

- `ProfessionalService` / `LocalBusiness`: Name, Adresse (Stämmesäckerstraße 6, 72762 Reutlingen), Telefon, Servicegebiet D-A-CH, Leistungen.
- `Person` für Frank Bode mit `sameAs`-Links (LinkedIn/Xing), Berufsbezeichnung, Expertise.
- `Service` für die Beratungspakete BASIS/PRO/PROPLUS.
- `FAQPage`, sobald eine FAQ-Sektion existiert (siehe Punkt 4).
- `BreadcrumbList` für die Navigationspfade.

Positiv: robots.txt und sitemap.xml sind vorhanden und korrekt.

## 3. GEO – Generative Engine Optimization (Sichtbarkeit in KI-Suche)

Immer mehr Unternehmer fragen ChatGPT, Perplexity & Google AI Overviews nach z. B. „Wer hilft SHK-Betrieben beim Ausbau von Wartungsverträgen?". Damit die Seite dort zitiert wird:

- **FAQ-Sektion** mit direkt beantwortbaren Fragen anlegen: „Was kostet eine SHK-Unternehmensberatung?", „Wie steigere ich den Wert meines SHK-Betriebs vor dem Verkauf?", „Wie baue ich Wartungsverträge aus?". KI-Systeme extrahieren bevorzugt klare Frage-Antwort-Paare.
- **Konkrete, zitierfähige Fakten** statt allgemeiner Aussagen: Zahlen, Ergebnisse aus Projekten („Wartungsvertragsquote in 12 Monaten von X % auf Y % gesteigert"). Aktuell gibt es keine einzige belegte Zahl auf der Website.
- **Klare Entitäts-Definitionen** in den ersten Absätzen: Wer, was, für wen, wo – in einem Satz („Die BODE Mehrwert-Beratung aus Reutlingen berät SHK-Betriebe und mittelständische Serviceorganisationen in D-A-CH bei …").
- **E-E-A-T-Signale:** Autorenprofil ausbauen, Stationen/Referenzen nennen, Publikationen oder Vorträge verlinken. KI-Modelle und Google gewichten nachweisbare Expertise.
- Strukturierte Daten aus Punkt 2 sind zugleich die wichtigste GEO-Grundlage.

## 4. Content-Strategie (Traffic-Aufbau)

Die Website hat ausschließlich Angebotsseiten – damit rankt man nur für den eigenen Namen. Ein Ratgeber-Bereich mit 1–2 Artikeln pro Monat zu Themen mit echtem Suchvolumen würde qualifizierten Traffic bringen:

- „SHK-Betrieb verkaufen: So steigern Sie den Unternehmenswert" (Nachfolge ist DAS Schmerzthema der Branche)
- „Wartungsverträge im SHK-Handwerk: Kalkulation und Vermarktung"
- „Kundendienst-Kennzahlen: Diese KPIs sollte jeder Servicebetrieb kennen"
- „Digitalisierung im SHK-Kundendienst: Tools im Vergleich"

Jeder Artikel endet mit CTA zum Erstgespräch. Das bedient gleichzeitig SEO und GEO (KI-Systeme zitieren Ratgeber-Inhalte weit häufiger als Angebotsseiten).

## 5. Conversion & Beratungsfunktion hervorheben

- **CTA above the fold:** Der erste Kontakt-CTA kommt erst weit unten. → Prominenter Button „Kostenloses Erstgespräch vereinbaren" im Header (sticky) und im Hero-Bereich jeder Seite.
- **Online-Terminbuchung** (z. B. Calendly) statt nur Telefon/Formular – senkt die Hemmschwelle deutlich, gerade für die Zielgruppe, die abends recherchiert.
- **Social Proof ergänzen:** Es gibt keine Kundenstimmen, Referenzlogos, Projektzahlen oder Bewertungen. Schon 2–3 Testimonials mit Name/Betrieb und eine Zeile wie „30+ Jahre Erfahrung · X Projekte · D-A-CH" unter dem Hero würden die Glaubwürdigkeit stark erhöhen.
- **Das „unverbindliche Erstgespräch" produktisieren:** Als eigenes Angebot mit Ablauf darstellen (30 Min, telefonisch, kostenlos, das nehmen Sie mit) statt es nur im Fließtext zu erwähnen.
- **Kontaktformular:** Die Angabe „Sie erreichen mich 24/7" wirkt unglaubwürdig → besser konkrete Reaktionszeit („Antwort innerhalb von 24 h"). Einwilligungstext korrigieren („Ich willige der Datenschutzerklärung ein" → „Ich habe die Datenschutzerklärung gelesen und willige ein …").

## 6. Schreibfehler nach Seite

Tippfehler wirken bei einem Premium-Beratungsangebot besonders negativ – hier alle Fundstellen:

**/beratung** (Beratung technischer Kundendienst)

- „einen Vertriebshindernis" → „ein Vertriebshindernis"
- „Chancen der Organisation, der Prozesse und **beim im** Personal" → „beim Personal"
- „stelle ich **Ihre unternehmerische Entscheidungen** auf **gesicherter Grundlagen**" → „Ihre unternehmerischen Entscheidungen auf gesicherte Grundlagen"
- „**Zu Ihren den** Key-Playern und Mitarbeiterteams baue ich…" → „Zu Ihren Key-Playern…"
- „Ich begleite **ihr** Management" → „Ihr" (Höflichkeitsform groß)
- Satzbau: „…sollten Sie jetzt handeln und mit professioneller Beratung Ihren Kundendienst … **zu steuern**" → „steuern" (ohne „zu")

**/mehrwert-beratung**

- „Abgleich der **vorhanden** Mitarbeiterqualifikation" → „vorhandenen"

**/beratungsschwerpunkte**

- „**Subscribtion**-Modellen" → „Subscription-Modellen"
- „Monitoring Konzept" → „Monitoring-Konzept"

**/beratungsprozess-techn-kundendienst**

- „…zugeschnittenes Konzept **, koordiniere**…" → Leerzeichen vor dem Komma entfernen

**/beratungspakete**

- „mit **regelmäßigen** Statusabgleich" → „regelmäßigem"

**/kontakt**

- „**Ich willige der Datenschutzerklärung ein**" → „Ich stimme der Datenschutzerklärung zu" bzw. „Ich willige in die Verarbeitung … ein"

## 7. Design & Technik

- **Cookie-Banner:** „Wenn Sie den Besuch fortsetzen, stimmen Sie zu" ist nach DSGVO problematisch, falls doch einwilligungspflichtige Cookies gesetzt werden. Wenn wirklich nur technisch notwendige Cookies laufen, braucht es gar keinen Zustimmungs-Banner – ein Hinweis genügt. (Kein Rechtsrat – im Zweifel prüfen lassen.)
- **Bilder modernisieren:** PNG-Porträt und GIF-Grafik durch WebP/AVIF ersetzen, Lazy Loading aktivieren. Ladezeit mit PageSpeed Insights (pagespeed.web.dev) prüfen.
- **Startseiten-URL:** `/` leitet auf `/start` weiter. Sauberer wäre die Startseite direkt unter `/` (in Contao einstellbar); mindestens sicherstellen, dass es ein 301-Redirect ist.
- **Walt-Disney-Zitat** auf der Startseite ersetzen – generisch und zudem eine heikle Zuschreibung. Ein eigenes Statement oder Kundenzitat wirkt stärker.
- **Duplizierte Navigation im Quelltext** (zweifach gerendert) aufräumen – geringe Priorität.
- Aktualitätssignal: Die Seite wirkt statisch/datiert. Schon ein „Aktuelles"-Bereich mit 2–3 Einträgen pro Jahr signalisiert Google und Besuchern, dass der Betrieb aktiv ist.

## Priorisierte Maßnahmenliste

| Prio | Maßnahme | Aufwand |
|---|---|---|
| 1 | Kaputten `/aktuelles`-CTA-Link fixen | Minuten |
| 2 | Meta-Descriptions + Title-Tags für alle Seiten | 1–2 h |
| 3 | CTA „Kostenloses Erstgespräch" in Header/Hero + Online-Terminbuchung | gering |
| 4 | Alt-Texte, H1-Struktur, Schreibfehler (siehe Punkt 6) | 2–3 h |
| 5 | Schema.org-Markup (ProfessionalService, Person) | 0,5 Tag |
| 6 | Testimonials/Referenzen einholen und einbauen | laufend |
| 7 | FAQ-Sektion mit FAQ-Schema (SEO + GEO) | 1 Tag |
| 8 | Ratgeber-Bereich starten (Nachfolge, Wartungsverträge) | laufend |

---

*Basis: Crawl aller erreichbaren Seiten am 07.07.2026. Nicht geprüft (Zugang nötig): tatsächliche Ladezeiten/Core Web Vitals, Backlink-Profil, Search-Console-Daten. Empfehlung: PageSpeed Insights und Google Search Console als Nächstes anschauen.*
