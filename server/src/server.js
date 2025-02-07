const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const PORT = 5000;

const client = new Client({
  user: 'nishant',
  host: 'localhost',
  database: 'trading_bot',
  password: 'nishant',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected To PostgreSQL DataBase'))
  .catch(err => console.error('Connection Error', err.stack));

app.use(cors());
app.use(bodyParser.json());

app.post('/chart-data', async (req, res) => {
  const { chartInfo } = req.body;
  console.log('Received Chart Data :', chartInfo);

  let { symbol, price, volume } = chartInfo;

  if (price === 'N/A') price = null;
  if (volume === 'N/A') volume = null;

  const query = `
    INSERT INTO chart_data (symbol, price, volume)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    const result = await client.query(query, [symbol, price, volume]);
    console.log('Data Inserted:', result.rows[0]);
    res.json({ message: 'Data Received Successfully', chartInfo: result.rows[0] });
  } catch (err) {
    console.error('Error Inserting Data:', err);
    res.status(500).json({ message: 'Error Inserting Data', error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server Is Running On http://localhost:${PORT}`);
});