# 🚀 Render.com Deployment für AIR-PI Archetypen-Schmied

## Vorbereitung

### 1. GitHub Repository erstellen

```bash
# Im Projektverzeichnis
git init
git add .
git commit -m "Initial commit: AIR-PI Archetypen-Schmied MVP"

# Auf GitHub:
# 1. Neues Repository erstellen: "AIR-PI-ArchetypenSchmied"
# 2. Repository als public setzen

# Lokal:
git remote add origin https://github.com/DEIN-USERNAME/AIR-PI-ArchetypenSchmied.git
git branch -M main
git push -u origin main
```

### 2. Dateien prüfen

Stelle sicher, dass diese Dateien vorhanden sind:
- ✅ `server.js` - Express Server
- ✅ `package.json` - Dependencies
- ✅ `render.yaml` - Render Konfiguration
- ✅ `index_mvp1_official.html` - Hauptseite
- ✅ `SChmiedAmFeuer.mp4` - Video-Hintergrund
- ✅ Alle anderen HTML-Dateien

## Deployment auf Render

### Option A: Über render.yaml (Empfohlen)

1. **Gehe zu [Render Dashboard](https://dashboard.render.com/)**

2. **Klicke auf "New +" → "Blueprint"**

3. **Verbinde dein GitHub Repository**
   - Wähle dein Repository: `AIR-PI-ArchetypenSchmied`
   - Render erkennt automatisch die `render.yaml`

4. **Bestätige die Einstellungen:**
   ```
   Service Name: air-pi-archetypen-schmied
   Runtime: Node
   Build Command: npm install
   Start Command: node server.js
   ```

5. **Klicke auf "Apply"**

### Option B: Manuelles Setup

1. **Gehe zu [Render Dashboard](https://dashboard.render.com/)**

2. **Klicke auf "New +" → "Web Service"**

3. **Verbinde GitHub und wähle dein Repository**

4. **Konfiguriere den Service:**
   - **Name**: `air-pi-archetypen-schmied`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free

5. **Environment Variables hinzufügen:**
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render setzt das automatisch)

6. **Klicke auf "Create Web Service"**

## Nach dem Deployment

### 1. Warte auf den Build
- Render baut deine App automatisch
- Das dauert 2-5 Minuten
- Du siehst Live-Logs im Dashboard

### 2. Deine App ist live unter:
```
https://air-pi-archetypen-schmied.onrender.com
```

### 3. Teste die Endpoints:
- Hauptseite: `https://air-pi-archetypen-schmied.onrender.com/`
- Health Check: `https://air-pi-archetypen-schmied.onrender.com/health`
- Enhanced Version: `https://air-pi-archetypen-schmied.onrender.com/enhanced`

## Troubleshooting

### Widget lädt nicht?
1. Prüfe die Browser-Konsole für Fehler
2. Stelle sicher, dass keine Ad-Blocker aktiv sind
3. Teste in Chrome/Edge für beste Kompatibilität

### Video lädt nicht?
- Render hat ein 100MB Limit für statische Dateien
- Falls das Video zu groß ist, hoste es extern (z.B. Cloudinary)

### Server startet nicht?
- Prüfe die Logs in Render Dashboard
- Stelle sicher, dass alle Dependencies in package.json sind

## Updates deployen

```bash
# Änderungen machen
git add .
git commit -m "Update: Beschreibung der Änderung"
git push origin main

# Render deployed automatisch!
```

## Custom Domain (Optional)

1. In Render Dashboard → Settings → Custom Domains
2. Füge deine Domain hinzu: `archetypen-schmied.de`
3. Konfiguriere DNS:
   - CNAME Record: `www` → `air-pi-archetypen-schmied.onrender.com`
   - A Record: `@` → Render IP (wird angezeigt)

## Monitoring

- **Logs**: Dashboard → Logs
- **Metrics**: Dashboard → Metrics
- **Health**: Automatische Checks auf `/health`

## 🎉 Fertig!

Deine AIR-PI Archetypen-Schmied App ist jetzt live auf Render!

### Nächste Schritte:
1. Teile den Link: `https://air-pi-archetypen-schmied.onrender.com`
2. Teste das ElevenLabs Widget
3. Sammle Feedback
4. Iteriere und verbessere

---

**Hinweis**: Der Free Tier von Render pausiert nach 15 Minuten Inaktivität. Der erste Request danach dauert ~30 Sekunden (Cold Start). 