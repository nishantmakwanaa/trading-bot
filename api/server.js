const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/predict', async (req, res) => {
    try {
        console.log('Data received from frontend:', req.body);
        const pythonResponse = await axios.post('http://localhost:5000/predict', req.body, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Response from Python server:', pythonResponse.data);
        res.json(pythonResponse.data);
    } catch (error) {
        console.error('Error communicating with Python server:', error.message);
        res.status(500).json({ error: 'Error communicating with ML model' });
    }
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});