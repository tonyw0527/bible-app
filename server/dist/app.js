"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require('cookie-parser');
const PORT = 3001;
const cors = require('cors');
const app = express_1.default();
app.use(express_1.default.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
const mongoose = require('mongoose');
mongoose.connect(`mongodb://master:aktmxj0527@initial-cluster-shard-00-00.r2sqy.mongodb.net:27017,initial-cluster-shard-00-01.r2sqy.mongodb.net:27017,initial-cluster-shard-00-02.r2sqy.mongodb.net:27017/Bible?ssl=true&replicaSet=atlas-p3n6uo-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log('DB connected');
});
const Book = new mongoose.Schema({
    book: Number,
    chapter: Number,
    verse: Number,
    content: String
});
const bookModel = mongoose.model('Book', Book);
app.get('/bible', (req, res) => {
    const { book, chapter } = req.query;
    console.log('query', book, chapter);
    bookModel.find({ $and: [{ book: book }, { chapter: chapter }] }).sort({ verse: 1 }).exec((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            const aYear = new Date(Date.now() + (1000 * 60 * 60 * 24 * 365));
            const cookieOptions = { expires: aYear };
            res.cookie('book', book, cookieOptions);
            res.cookie('chapter', chapter, cookieOptions);
            res.json(data);
        }
    });
});
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} now!`);
});
