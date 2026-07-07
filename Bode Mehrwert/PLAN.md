# Umsetzungsplan: Relaunch-Demo bode-mehrwert.de

Basis: SEO-/GEO-Analyse vom 07.07.2026. Ziel: pitchbare Demo-Website (statisch, GitHub-Pages-fähig), die alle Analyse-Punkte umsetzt. Kein neuer Content – nur Bestandstexte, gezielt korrigiert.

## 1. Technik & Struktur

- Statisches HTML/CSS/JS, kein Build-Tool → direkt auf GitHub Pages oder Netlify Drop hostbar
- Ordner `website/` mit 11 Seiten (Struktur wie Original):
  index (Start), beratung, beratungsprozess-techn-kundendienst, beratungsschwerpunkte, mehrwert-beratung, beratungsprozess, beratungspakete, frank-bode, kontakt, impressum, datenschutz
- Bilder: zunächst von der Live-Site eingebunden (Hotlinking, mit `loading="lazy"`); für den echten Relaunch lokal als WebP ablegen (siehe README)
- robots.txt + sitemap.xml (Platzhalter-Domain, vor Deploy anpassen)
- Kein Cookie-Banner: Die Demo setzt keinerlei Cookies → nach DSGVO genügt der Hinweis in der Datenschutzerklärung

## 2. Umgesetzte Analyse-Punkte

| Analyse-Punkt | Umsetzung |
|---|---|
| Kaputter CTA `/aktuelles` | Alle CTAs zeigen auf `kontakt.html` |
| Fehlende Meta-Descriptions | Individuelle Description (<155 Zeichen) auf jeder Seite |
| Schwache Title-Tags | Keyword-Titles gemäß Analyse-Tabelle, keine Duplikate mehr |
| Alt-Texte | Alle Bilder mit beschreibenden Alt-Attributen |
| H1-Struktur | Logo ist kein H1 mehr; genau eine inhaltliche H1 pro Seite, saubere H2/H3-Hierarchie |
| Schema.org | JSON-LD: ProfessionalService (alle Seiten), Person (Frank Bode), Service/OfferCatalog (Pakete), FAQPage (Start), BreadcrumbList (Unterseiten) |
| GEO: Entitäts-Definition | Erster Absatz der Startseite: Wer, was, für wen, wo – in einem Satz |
| GEO: FAQ | FAQ-Sektion auf Startseite, Antworten ausschließlich aus Bestandstexten abgeleitet, mit FAQPage-Schema |
| CTA above the fold | Sticky Header mit Button „Erstgespräch vereinbaren" + CTA im Hero jeder Seite |
| Erstgespräch produktisiert | Eigene Sektion auf Start- und Kontaktseite (unverbindlich, telefonisch oder vor Ort) |
| Social Proof | Testimonial-Platzhalter (klar als solche markiert – vor Launch durch echte Kundenstimmen ersetzen) + Fakten-Leiste „30+ Jahre Erfahrung · D-A-CH" |
| „24/7" | Ersetzt durch „Antwort innerhalb von 24 Stunden" |
| Einwilligungstext | „Ich habe die Datenschutzerklärung gelesen und willige ein …" |
| Walt-Disney-Zitat | Ersetzt durch bestehendes Frank-Bode-Zitat (von /frank-bode) |
| Schreibfehler | Alle Fundstellen aus Punkt 6 der Analyse korrigiert |
| Doppelte Navigation | Nur eine Navigation im Markup |
| Startseiten-URL | Startseite liegt direkt unter `/` (index.html) |

## 3. Offene Punkte für den echten Relaunch (nicht Teil der Demo)

- Echte Testimonials + belegbare Projektzahlen einholen (Platzhalter ersetzen)
- Online-Terminbuchung (z. B. Calendly) einbinden – Button ist vorbereitet
- Ratgeber-Bereich starten (Nachfolge, Wartungsverträge, KPIs, Digitalisierung)
- Kontaktformular an Backend/Mailer anbinden (Demo öffnet vorbefülltes E-Mail-Programm)
- Bilder lokal als WebP/AVIF, PageSpeed-Check, Search Console einrichten
- Domain in sitemap.xml/robots.txt + Canonical-URLs auf finale Domain ändern
