const Book = require('../models/bookModel');

const bookController = {};

bookController.getBooks = async (req, res) => {
  const query = {};
  if (req.query.genre) {
    query.genre = req.query.genre;
  }
  await Book.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
};
module.exports = bookController;
