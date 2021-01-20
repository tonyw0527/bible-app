import { createContext, useContext } from "react";

import UserStore from "./UserStore";
import BibleStore from "./BibleStore";

class RootStore {
  bibleStore;
  userStore;

  constructor() {
    this.bibleStore = new BibleStore();
    this.userStore = new UserStore();
  }
}

const StoreContext = createContext<RootStore | undefined>(undefined);

type StoreProviderProps = {
  children: React.ReactNode;
};

// Provider - for index.js
export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={new RootStore()}>
      {children}
    </StoreContext.Provider>
  );
};

// useStore - for componenets
export const useStore = () => useContext(StoreContext);
