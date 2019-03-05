const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/apiRouter');
const db = require('./config/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);


app.get('/', (req, res) => {
  res.send('Hello, theres');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App running on http://localhost:${PORT}`);
});
