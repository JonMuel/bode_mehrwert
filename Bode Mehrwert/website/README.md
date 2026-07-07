# BODE Mehrwert-Beratung – Relaunch-Demo

Statische Website (HTML/CSS/JS, kein Build-Tool nötig). Umsetzung der SEO-/GEO-Analyse vom 07.07.2026 – Details siehe `../PLAN.md`.

## Lokal ansehen

Einfach `index.html` doppelklicken – alles läuft ohne Server.

## Auf GitHub Pages hosten (temporäre URL)

1. Auf github.com einloggen → **New repository** → Name z. B. `bode-mehrwert` → Public → Create.
2. Im neuen Repo: **uploading an existing file** anklicken → alle Dateien aus diesem `website`-Ordner per Drag & Drop hochladen (inkl. der Ordner `css` und `js`) → Commit.
3. Repo → **Settings → Pages** → Source: „Deploy from a branch" → Branch: `main`, Ordner: `/ (root)` → Save.
4. Nach 1–2 Minuten ist die Seite erreichbar unter:
   `https://DEIN-BENUTZERNAME.github.io/bode-mehrwert/`

Alternative ohne GitHub: [Netlify Drop](https://app.netlify.com/drop) – den ganzen Ordner ins Browserfenster ziehen, fertige URL sofort erhalten.

## Vor dem Deploy (optional, für die Demo nicht zwingend)

- In `sitemap.xml` und `robots.txt`: `DEIN-BENUTZERNAME.github.io/bode-mehrwert` durch die echte URL ersetzen.

## Bilder

Die Bilder werden aktuell direkt von der Live-Website (bode-mehrwert.de) geladen – für die Pitch-Demo völlig ausreichend. Für den echten Relaunch:

1. Bilder von bode-mehrwert.de herunterladen (`/files/bode/...`)
2. In WebP konvertieren (z. B. squoosh.app)
3. In einen Ordner `assets/` legen und die `src`-Pfade in den HTML-Dateien anpassen

## Für den echten Relaunch noch offen

- Platzhalter-Testimonials auf der Startseite durch echte Kundenstimmen ersetzen
- Kontaktformular an einen Mail-Dienst anbinden (Demo öffnet das E-Mail-Programm); z. B. Formspree oder das Contao-Formular
- Online-Terminbuchung (z. B. Calendly) verlinken
- Ratgeber-Bereich starten (Nachfolge, Wartungsverträge, Kundendienst-KPIs)
- Canonical-URLs auf die finale Domain setzen, Google Search Console einrichten
