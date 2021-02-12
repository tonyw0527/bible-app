import BibleStore from "./BibleStore";

import { enableStaticRendering } from "mobx-react";

enableStaticRendering(typeof window === "undefined");

export default class RootStore {
  bibleStore;

  constructor() {
    this.bibleStore = new BibleStore();
  }
}
