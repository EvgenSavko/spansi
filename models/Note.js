import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String },
  second_name: { type: String },
  phone: { type: String },
});

mongoose.model('Note', NoteSchema);
