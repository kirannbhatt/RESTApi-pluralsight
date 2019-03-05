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
bookController.addBook = async (req, res) => {
  const book = await new Book(req.body);
  book.save();
  return res.status(201).json(book);
};

module.exports = bookController;
