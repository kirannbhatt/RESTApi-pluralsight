const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/pluralsight', { useNewUrlParser: true });

module.exports = db;
