const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Webhook test app running');
});

app.post('/webhook', (req, res) => {
  res.status(200).send('Webhook received');
});

module.exports = app;
