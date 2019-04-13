const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String },
  second_name: { type: String },
  phone: { type: String },
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
