const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to send chart data to the Python ML server
app.post('/api/predict', async (req, res) => {
    try {
        // Log received data for debugging
        console.log('Data received from frontend:', req.body);

        // Send data to the Python server
        const pythonResponse = await axios.post('http://localhost:5000/predict', req.body, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Log Python server response
        console.log('Response from Python server:', pythonResponse.data);

        // Forward Python response back to the frontend
        res.json(pythonResponse.data);
    } catch (error) {
        console.error('Error communicating with Python server:', error.message);

        // Return error message to frontend
        res.status(500).json({ error: 'Error communicating with ML model' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});