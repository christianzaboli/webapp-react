import { createContext, useContext } from "react";

const DefaultContext = createContext();

function ContextProvider({ children }) {
  // db
  const apiDB = import.meta.env.VITE_DB_HOST;

  return (
    <DefaultContext.Provider value={{ apiDB }}>
      {children}
    </DefaultContext.Provider>
  );
}
function useDefaultContext() {
  const context = useContext(DefaultContext);
  return context;
}

export { ContextProvider, useDefaultContext };
