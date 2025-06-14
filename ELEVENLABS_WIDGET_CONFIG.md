# 🎯 ElevenLabs Widget Konfiguration - Minimal & Unauffällig

## Widget-Einstellungen in ElevenLabs Dashboard

### 1. **Theme-Farben anpassen** (für dunkles, unauffälliges Design):

```
base: #000000 (Schwarz)
base_hover: #1a1a1a (Dunkelgrau)
base_active: #23c169 (Grün - lassen)
base_border: #39746c (Dunkelgrün)
base_subtle: #6b7280 (Grau - lassen)
base_primary: #000000 (Schwarz)
base_error: #ef4444 (Rot - lassen)

accent: #ff8c00 (Orange - für Feuer-Theme)
accent_hover: #ff6b00 (Dunkleres Orange)
accent_active: #d2691e (Noch dunkler)
accent_border: #8b4513 (Braun)
accent_subtle: #6b7280 (Grau - lassen)
accent_primary: #ff8c00 (Orange)
```

### 2. **Text-Inhalte anpassen**:

```
main_label: Sprich zum Schmied
start_call: 🔥 Feuer entfachen
new_call: Neue Schmiedesession
end_call: Feuer löschen
mute_microphone: Schweigen
```

### 3. **Größen-Einstellungen**:

```
overlay_padding: 20 (kleiner machen)
button_radius: 50 (rund)
input_radius: 25
bubble_radius: 50
sheet_radius: 20
compact_sheet_radius: 15
dropdown_sheet_radius: 20
```

### 4. **Widget-Integration im HTML**:

#### Option A: Minimaler Button (60x60px)
```html
<elevenlabs-convai 
    agent-id="agent_01jxn7kxjpfvt87rphxdnq1ddj"
    style="width: 60px; height: 60px;">
</elevenlabs-convai>
```

#### Option B: Nur Icon (40x40px)
```html
<elevenlabs-convai 
    agent-id="agent_01jxn7kxjpfvt87rphxdnq1ddj"
    style="width: 40px; height: 40px;">
</elevenlabs-convai>
```

#### Option C: Versteckt bis Klick
```html
<div id="widget-wrapper" style="display: none;">
    <elevenlabs-convai 
        agent-id="agent_01jxn7kxjpfvt87rphxdnq1ddj">
    </elevenlabs-convai>
</div>

<script>
// Zeige Widget nur bei Button-Klick
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('widget-wrapper').style.display = 'block';
});
</script>
```

## 🎨 CSS für minimales Widget

```css
/* Widget klein und unauffällig */
elevenlabs-convai {
    position: fixed !important;
    bottom: 20px !important;
    right: 20px !important;
    width: 60px !important;
    height: 60px !important;
    opacity: 0.8;
    transition: all 0.3s ease;
}

elevenlabs-convai:hover {
    opacity: 1;
    transform: scale(1.1);
}

/* Verstecke Text, zeige nur Icon */
elevenlabs-convai::part(label) {
    display: none !important;
}
```

## 🚀 Empfohlene Konfiguration

1. **Setze Widget-Größe auf 60x60px**
2. **Positioniere es unten rechts**
3. **Verwende dunkle Farben** (Schwarz/Dunkelgrau)
4. **Orange Akzente** für Feuer-Theme
5. **Reduziere padding auf 20**
6. **Mache alle Radien rund (50)**

## 📱 Mobile Anpassung

```css
@media (max-width: 768px) {
    elevenlabs-convai {
        width: 50px !important;
        height: 50px !important;
        bottom: 10px !important;
        right: 10px !important;
    }
}
```

## ⚡ Quick Fix

Falls das Widget immer noch zu groß ist, füge dieses CSS hinzu:

```css
/* Force minimal size */
elevenlabs-convai,
elevenlabs-convai > * {
    max-width: 60px !important;
    max-height: 60px !important;
    overflow: hidden !important;
}
```

---

**Teste die neue minimale Version:**
http://localhost:3000/index_mvp1_minimal.html 