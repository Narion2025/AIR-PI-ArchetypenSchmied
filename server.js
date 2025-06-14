const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Performance Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com", "https://cdnjs.cloudflare.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            mediaSrc: ["'self'", "blob:"],
            connectSrc: ["'self'", "https://api.elevenlabs.io", "https://api.us.elevenlabs.io", "wss://api.elevenlabs.io", "wss://api.us.elevenlabs.io"]
        }
    }
}));
app.use(compression());
app.use(cors());
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_mvp1.html'));
});

app.get('/enhanced', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_mvp1_enhanced.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'AIR-PI Archetypen-Schmied',
        version: '1.0.0-mvp1'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('🔥 Diese Seite wurde noch nicht geschmiedet.');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('🔥 Das Feuer brennt zu heiß - bitte später versuchen.');
});

// Start server
app.listen(PORT, () => {
    console.log(`🔥 AIR-PI Archetypen-Schmied läuft auf Port ${PORT}`);
    console.log(`🌐 Öffne http://localhost:${PORT} im Browser`);
}); 