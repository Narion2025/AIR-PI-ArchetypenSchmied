# 🚀 AIR-PI Archetypen-Schmied MVP1 Launch Checklist

## Pre-Launch Checklist

### 🔧 Technical Setup
- [ ] Node.js installiert (v18+)
- [ ] npm dependencies installiert (`npm install`)
- [ ] .env Datei erstellt (von env.example kopiert)
- [ ] Port 3000 ist verfügbar

### 🎨 Content & Assets
- [ ] SChmiedAmFeuer.mp4 vorhanden
- [ ] Alle HTML-Dateien vorhanden
- [ ] ElevenLabs Agent ID korrekt eingetragen
- [ ] Fonts laden korrekt (Google Fonts)

### 🧪 Testing
- [ ] Desktop Browser Test (Chrome, Firefox, Safari, Edge)
- [ ] Mobile Browser Test (iOS Safari, Chrome Android)
- [ ] Video Autoplay funktioniert
- [ ] ElevenLabs Widget lädt
- [ ] Interaktive Elemente reagieren
- [ ] Responsive Design auf allen Größen

### 🔐 Security
- [ ] Helmet.js Security Headers aktiv
- [ ] CORS korrekt konfiguriert
- [ ] CSP Policy erlaubt ElevenLabs
- [ ] Keine sensiblen Daten im Code

## Launch Steps

### 1. Lokaler Test
```bash
# Server starten
npm start

# Browser öffnen
http://localhost:3000

# Enhanced Version testen
http://localhost:3000/enhanced
```

### 2. Performance Check
- [ ] Lighthouse Score > 80
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 5s
- [ ] Video lädt progressiv

### 3. Deployment Vorbereitung
- [ ] Git Repository initialisiert
- [ ] .gitignore konfiguriert
- [ ] Alle Dateien committed
- [ ] Remote Repository erstellt

### 4. Production Deployment

#### Option A: Vercel
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployment
vercel --prod

# Environment Variables setzen
vercel env add PORT
```

#### Option B: Netlify
- [ ] Netlify Account erstellt
- [ ] Neues Site von Git
- [ ] Build Command: (leer lassen)
- [ ] Publish Directory: .

#### Option C: Heroku
```bash
# Heroku CLI installiert
heroku create air-pi-mvp1

# Deployment
git push heroku main

# Logs prüfen
heroku logs --tail
```

## Post-Launch Checklist

### 📊 Monitoring
- [ ] Google Analytics eingebunden (optional)
- [ ] Uptime Monitoring aktiviert
- [ ] Error Tracking konfiguriert
- [ ] Performance Monitoring läuft

### 🎯 User Testing
- [ ] 5 Beta-Tester eingeladen
- [ ] Feedback-Formular vorbereitet
- [ ] Screen Recording Tools bereit
- [ ] A/B Test Varianten geplant

### 📣 Marketing
- [ ] Social Media Posts vorbereitet
- [ ] Landing Page Screenshots erstellt
- [ ] Demo-Video aufgenommen
- [ ] Press Kit zusammengestellt

### 🔄 Iteration Planning
- [ ] User Feedback gesammelt
- [ ] Bug Reports dokumentiert
- [ ] Feature Requests notiert
- [ ] MVP1.1 Roadmap erstellt

## Success Criteria

### ✅ Launch ist erfolgreich wenn:
- [ ] Website ist unter Production URL erreichbar
- [ ] Keine kritischen Fehler in ersten 24h
- [ ] Mindestens 10 User testen erfolgreich
- [ ] Voice Chat Completion Rate > 30%
- [ ] Positive erste Reaktionen

### 🚨 Rollback Plan
Falls kritische Fehler auftreten:
1. Maintenance Page aktivieren
2. Logs analysieren
3. Hotfix entwickeln
4. Staging Test
5. Re-deployment

## Kontakte

**Technical Lead:** tech@air-pi.com
**Design Lead:** design@archetypen-schmied.de
**Product Owner:** product@air-pi.com
**Emergency:** +49 XXX XXXXXXX

---

*"Der erste Schlag auf dem Amboss - möge das Feuer hell brennen!"* 🔥 