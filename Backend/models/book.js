// models/book.js
// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     genre: String,
//     available: Boolean,
//     issuedTo: String,
//     issuedDate: Date,
//     returnDate: Date,
    
// });

// module.exports = mongoose.model('Book', bookSchema);

// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    available: { type: Boolean, default: true }, 
    borrower: { type: mongoose.Schema.Types.Number, ref: 'Student', default: null }, 
    issuedDate: { type: Date, default: null },
    returnDate: { type: Date, default: null }
});

module.exports = mongoose.model('Book', bookSchema);
