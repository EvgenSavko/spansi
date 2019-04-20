import mongoose from 'mongoose';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
  console.log(`setUpConnection`);
  // mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true });
  mongoose.connect(
    process.env.MONGOLAB_URI ||
      'mongodb+srv://evgen:486279153@cluster0-zjudz.mongodb.net/notes?ssl=true&retryWrites=true&authSource=admin',
    {
      useNewUrlParser: true,
    }
  );
}

export function listNotes() {
  console.log(`listNotes2`);
  return Note.find();
}

export function createNote(data) {
  console.log('createNote', data);
  const note = new Note({
    name: data.name,
    password: data.password,
    email: data.email,
    first_name: data.first_name,
    second_name: data.second_name,
    phone: data.phone,
  });
  return note.save();
}

export function deleteNotes(id) {
  return Note.findById(id).remove();
}
