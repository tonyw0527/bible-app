import dbConnect from '../../utils/dbConnect';
import nivBookModel from '../../models/NivBooks';

export const config = {
  api: {
    externalResolver: true,
  },
}

// get method
export default (req, res) => {
  const { invicode } = req.cookies;
  dbConnect();

  const { book, chapter } = req.query;
  if (invicode !== process.env.INVITATION_CODE){
    res.status(400).json({ suceess: false, msg: "Wrong Code."})
    return;
  }
    console.log('query', book, chapter);
    nivBookModel.find({$and:[{ book: book },{chapter: chapter}]}).sort({ verse: 1}).exec((err, data) => {
        if(err){
            res.status(400).json({ success: false, msg: "db query error." })
            return;
        } else {
            res.status(200).json(data);
        }
    });
}