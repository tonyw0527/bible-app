import mongoose from 'mongoose';


const Book = new mongoose.Schema({
  book: Number,
  chapter: Number,
  verse: Number,
  content: String
})

export default mongoose.models.Book || mongoose.model('Book', Book);