const express = require('express');

const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.route('/list')
  .get(bookController.getBooks);

module.exports = bookRouter;
