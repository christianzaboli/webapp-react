import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DefaultContext = createContext();
const apiDB = import.meta.env.VITE_DB_HOST;

function ContextProvider({ children }) {
  // db
  const [movies, setMovies] = useState(); // array dell'index dei film
  function fetchMovies() {
    axios
      .get(apiDB + "movies")
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <DefaultContext.Provider value={{ movies }}>
      {children}
    </DefaultContext.Provider>
  );
}
function useDefaultContext() {
  const context = useContext(DefaultContext);
  return context;
}

export { ContextProvider, useDefaultContext };
