import { toJS, runInAction, autorun, makeAutoObservable } from 'mobx';
import axios from 'axios';
import Cookies from 'js-cookie';
import bibleIndex from '../utils/bibleIndex';

export default class BibleStore {
  // states
  test_text: string = "gogo";
  curr_book: number = 1;
  curr_chapter: number = 1;
  curr_verse: number = 1;

  curr_bible: Array<any> = [];

  curr_book_name: string| number| undefined = '';
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
    this.fetchOneChapter(this.curr_book, this.curr_chapter);

    // reactions
    autorun(() => {
    });
  }

  // actions
  updateCurrVerse(verse: number){
    this.curr_verse = verse;
  }

  async fetchOneChapter(book: number, chapter: number) {
    const result = await axios.get(
      `/api/bible`,
    {
      params: {
        book: book,
        chapter: chapter
      },
      withCredentials: true
    });

    runInAction(() => {
      this.curr_bible = result.data;
      this.curr_book = book;
      this.curr_chapter = chapter;
      //this.curr_verse = 1;
      this.curr_book_name = bibleIndex[book][0];
      this.curr_book_max_chapter = bibleIndex[book][1];
    });
  }

  // derivations
  get lengthOfBible() {
      return this.curr_bible.length;
  }
    
}