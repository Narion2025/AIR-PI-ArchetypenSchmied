#!/bin/bash

# AIR-PI Archetypen-Schmied MVP1 Setup Script
echo "🔥 AIR-PI Archetypen-Schmied MVP1 Setup"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert. Bitte installiere Node.js v18+"
    echo "👉 https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) gefunden"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm ist nicht installiert."
    exit 1
fi

echo "✅ npm $(npm -v) gefunden"

# Install dependencies
echo ""
echo "📦 Installiere Dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📝 Erstelle .env Datei..."
    cp env.example .env
    echo "✅ .env Datei erstellt (bitte anpassen falls nötig)"
fi

# Check if video file exists
if [ ! -f SChmiedAmFeuer.mp4 ]; then
    echo ""
    echo "⚠️  WARNUNG: SChmiedAmFeuer.mp4 nicht gefunden!"
    echo "   Das Feuer-Video ist wichtig für die volle Erfahrung."
fi

echo ""
echo "🎉 Setup abgeschlossen!"
echo ""
echo "🚀 Starte den Server mit:"
echo "   npm start"
echo ""
echo "🌐 Öffne dann im Browser:"
echo "   http://localhost:3000"
echo ""
echo "🔥 Möge das Feuer hell brennen!" 