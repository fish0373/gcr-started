const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = req.query.name || process.env.NAME || 'world';
  res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Google Cloud Run: listening on port ${port}`);
});

module.exports = app;