const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const bookRouter = express.Router();
const Book = require('./models/bookModel');
const db = require('./config/database');

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello, theres');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App running on http://localhost:${PORT}`);
});
