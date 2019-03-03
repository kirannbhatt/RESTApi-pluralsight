const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, theres');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App running on http://localhost:${PORT}`);
});
