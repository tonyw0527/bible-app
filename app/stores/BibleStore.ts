import { runInAction, autorun, makeAutoObservable } from 'mobx';
import axios from 'axios';
import Cookies from 'js-cookie';
import bibleIndex from '../utils/bibleIndex';

export default class BibleStore {
  // states
  test_text: string;
  curr_book: number;
  curr_chapter: number;
  curr_verse: number;

  curr_bible: Array<any>;
  isFetching: boolean;

  curr_book_name: string| number;
  curr_book_max_chapter: string| number| undefined = 0;

  constructor() {
    makeAutoObservable(this);

    const cookie_book: string | undefined = Cookies.get('book');
    const cookie_chapter: string | undefined = Cookies.get('chapter');
    const cookie_verse: string | undefined = Cookies.get('verse');

    if (
      cookie_book === undefined ||
      cookie_chapter === undefined ||
      cookie_verse === undefined
    ) {
      Cookies.set('book', '1', { expires: 365 });
      Cookies.set('chapter', '1', { expires: 365 });
      Cookies.set('verse', '1', { expires: 365 });
    }

    this.curr_book = Number(Cookies.get('book'));
    this.curr_chapter = Number(Cookies.get('chapter'));
    this.curr_verse = Number(Cookies.get('verse'));
    this.curr_bible = [];
    this.isFetching = false;

    this.curr_book_name = bibleIndex[this.curr_book][0];

    // reactions
    autorun(() => {
      console.log("Bible Data Fetching - ", this.curr_bible);
    });

    autorun(() => {
      console.log("is fetching - ", this.isFetching);
    });
  }

  // actions
  updateCurrVerse(verse: number){
    this.curr_verse = verse;
  }

  async fetchOneChapter(book: number, chapter: number) {
    let api = '/api/bible';

    this.isFetching = true;
    const result = await axios.get(
      api,
    {
      params: {
        book: book,
        chapter: chapter
      },
      withCredentials: true
    });
    console.log(result.data);

    runInAction(() => {
      this.curr_bible = result.data;
      this.curr_book = book;
      this.curr_chapter = chapter;
      //this.curr_verse = 1;
      this.curr_book_name = bibleIndex[book][0];
      this.curr_book_max_chapter = bibleIndex[book][1];
      this.isFetching = false;
    });
  }

  // derivations
  get lengthOfBible() {
      return this.curr_bible.length;
  }
    
}