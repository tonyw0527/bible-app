import mongoose from 'mongoose';


const Han_book = new mongoose.Schema({
  book: Number,
  chapter: Number,
  verse: Number,
  content: String
})

export default mongoose.models.Han_book || mongoose.model('Han_book', Han_book);