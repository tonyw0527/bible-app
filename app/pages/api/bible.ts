import dbConnect from '../../utils/dbConnect';
import hanBookModel from '../../models/HanBook';

export const config = {
  api: {
    externalResolver: true,
  },
}

// 성경 데이터 fetching route
export default (req, res) => {
  const { invicode } = req.cookies;
  dbConnect();

  const { book, chapter } = req.query;
    console.log('query', book, chapter);
    hanBookModel.find({$and:[{ book: book },{chapter: chapter}]}).sort({ verse: 1}).exec((err, data) => {
        if(err){
            res.status(400).json({ success: false, msg: "db query error." })
            return;
        } else {
            res.status(200).json(data);
        }
    });
}