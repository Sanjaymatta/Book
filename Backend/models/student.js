// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    regNo: { type: Number, unique: true }, 
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] 
});

module.exports = mongoose.model('Student', studentSchema);
