const express = require('express');
const path = require('path');
const { evaluateChecklist } = require('./controllers/checklist');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint
app.get('/api/checklist', async (req, res) => {
    try {
        const results = await evaluateChecklist();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to evaluate checklist' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
