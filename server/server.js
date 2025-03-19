const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//midleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});