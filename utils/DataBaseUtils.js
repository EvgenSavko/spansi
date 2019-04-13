const mongoose = require('mongoose');

require('../models/Node');

const Note = mongoose.model('Note');

module.exports = function setUpConnection() {
  mongoose.connect('mongodb://localhost/notes');
};

module.exports = function listNotes() {
  return Note.find();
};

module.exports = function createNote(data) {
  const note = new Note({
    name: data.name,
    password: data.password,
    email: data.email,
    first_name: data.first_name,
    second_name: data.second_name,
    phone: data.phone,
  });
  return note.save();
};

module.exports = function deleteNotes(id) {
  return Note.findById(id).remove();
};
