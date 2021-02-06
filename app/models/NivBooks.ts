import mongoose from 'mongoose';

const Niv_book = new mongoose.Schema({
  book: Number,
  chapter: Number,
  verse: Number,
  content: String
})

export default mongoose.models.Niv_book || mongoose.model('Niv_book', Niv_book);