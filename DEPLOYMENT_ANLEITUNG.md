# 🚀 AIR-PI Archetypen-Schmied - Deployment Anleitung

## Deployment-Optionen

### Option 1: Vercel (Empfohlen) ✅

**Voraussetzungen:**
- Vercel CLI ist installiert ✓
- Git Repository ist initialisiert ✓
- vercel.json ist konfiguriert ✓

**Deployment-Schritte:**

1. **Vercel Login (einmalig):**
   ```bash
   vercel login
   ```
   Folge den Anweisungen (Email-Verifikation)

2. **Deployment starten:**
   ```bash
   vercel
   ```
   
   Bei den Fragen:
   - Set up and deploy? → **Y**
   - Which scope? → Wähle deinen Account
   - Link to existing project? → **N** (beim ersten Mal)
   - Project name? → `air-pi-archetypen-schmied` (oder Enter für Default)
   - Directory? → **Enter** (current directory)
   - Override settings? → **N**

3. **Production Deployment:**
   ```bash
   vercel --prod
   ```

**Deine URLs werden sein:**
- Preview: `https://air-pi-archetypen-schmied-[hash].vercel.app`
- Production: `https://air-pi-archetypen-schmied.vercel.app`

### Option 2: Netlify (Alternative)

1. **Build-Befehl erstellen:**
   ```bash
   npm run build
   ```

2. **Netlify Drop:**
   - Gehe zu https://app.netlify.com/drop
   - Ziehe den gesamten Projekt-Ordner hinein
   - Fertig!

3. **Oder via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   netlify deploy --prod
   ```

### Option 3: GitHub Pages (Nur Frontend)

Da wir einen Express Server haben, ist GitHub Pages nur für die statischen Dateien geeignet.

1. **Erstelle einen gh-pages Branch:**
   ```bash
   git checkout -b gh-pages
   ```

2. **Kopiere nur Frontend-Dateien:**
   ```bash
   cp index_mvp1.html index.html
   git add index.html *.mp4 *.json *.txt
   git commit -m "GitHub Pages deployment"
   git push origin gh-pages
   ```

3. **Aktiviere GitHub Pages:**
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

### Option 4: Heroku

1. **Heroku CLI installieren:**
   ```bash
   brew tap heroku/brew && brew install heroku
   ```

2. **Heroku App erstellen:**
   ```bash
   heroku create air-pi-archetypen-schmied
   ```

3. **Deployment:**
   ```bash
   git push heroku main
   ```

### Option 5: Render.com

1. **Erstelle render.yaml:**
   ```yaml
   services:
     - type: web
       name: air-pi-archetypen-schmied
       env: node
       buildCommand: npm install
       startCommand: npm start
   ```

2. **Push zu GitHub:**
   ```bash
   git remote add origin https://github.com/[username]/air-pi-archetypen.git
   git push -u origin main
   ```

3. **Verbinde mit Render:**
   - Gehe zu render.com
   - New → Web Service
   - Connect GitHub repo
   - Deploy!

## 🔧 Post-Deployment Checklist

### Nach erfolgreichem Deployment:

1. **Test alle Funktionen:**
   - [ ] Hauptseite lädt
   - [ ] Video spielt ab
   - [ ] ElevenLabs Widget funktioniert
   - [ ] /enhanced Route funktioniert
   - [ ] Mobile Version testen

2. **Performance Check:**
   - [ ] Lighthouse Test durchführen
   - [ ] Loading Time < 3s
   - [ ] Video lädt progressiv

3. **Custom Domain (Optional):**
   ```bash
   vercel domains add archetypen-schmied.de
   ```

4. **Environment Variables:**
   ```bash
   vercel env add PORT
   vercel env add NODE_ENV
   ```

## 🚨 Troubleshooting

### Problem: Video lädt nicht
**Lösung:** Prüfe CORS Headers in server.js

### Problem: ElevenLabs Widget fehlt
**Lösung:** Prüfe Content Security Policy

### Problem: 404 Fehler
**Lösung:** Prüfe routes in vercel.json

### Problem: Deployment failed
**Lösung:** 
```bash
vercel logs
```

## 📊 Monitoring

Nach dem Deployment:

1. **Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Analytics, Logs, Deployments

2. **Uptime Monitoring:**
   - UptimeRobot.com (kostenlos)
   - Pingdom

3. **Error Tracking:**
   - Sentry.io Integration

## 🎯 Nächste Schritte

1. **Share die URL** mit Beta-Testern
2. **Sammle Feedback** über das Voice-Interface
3. **Iteriere** basierend auf User-Input
4. **Skaliere** wenn nötig

---

**Support:** Bei Problemen erstelle ein Issue auf GitHub oder kontaktiere tech@air-pi.com

*"Das Feuer brennt jetzt in der Cloud!"* 🔥☁️ 