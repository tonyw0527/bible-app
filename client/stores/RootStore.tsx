import UserStore from "./UserStore";
import BibleStore from "./BibleStore";

import { enableStaticRendering } from "mobx-react";

enableStaticRendering(typeof window === "undefined");

export default class RootStore {
  bibleStore;
  userStore;

  constructor() {
    this.bibleStore = new BibleStore();
    this.userStore = new UserStore();
  }
}
