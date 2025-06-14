const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Disable all security for testing
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_mvp1_official.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🔥 Test-Server OHNE CSP läuft auf Port ${PORT}`);
    console.log(`🌐 Öffne http://localhost:${PORT} im Browser`);
}); 