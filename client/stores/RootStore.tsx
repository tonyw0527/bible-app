import { createContext, useContext } from "react";

import BibleStore from "./BibleStore";

class RootStore {
  bibleStore;

  constructor() {
    this.bibleStore = new BibleStore();
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
