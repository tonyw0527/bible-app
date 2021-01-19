import dbConnect from '../../utils/dbConnect';
import bookModel from '../../models/Book';

export const config = {
  api: {
    externalResolver: true,
  },
}

// get method
export default (req, res) => {

  dbConnect();

  const { book, chapter } = req.query;
    console.log('query', book, chapter);
    bookModel.find({$and:[{ book: book },{chapter: chapter}]}).sort({ verse: 1}).exec((err, data) => {
        if(err){
            res.status(400).json({ success: false })
            return;
        } else {
            res.status(200).json(data);
        }
    });
}