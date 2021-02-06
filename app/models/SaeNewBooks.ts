import mongoose from 'mongoose';

const Saenew_book = new mongoose.Schema({
  book: Number,
  chapter: Number,
  verse: Number,
  content: String
})

export default mongoose.models.Saenew_book || mongoose.model('Saenew_book', Saenew_book);