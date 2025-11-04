import { createContext, useContext, useState, useEffect, } from "react";
import axios from "axios";

const DefaultContext = createContext()

function contextProvider({ children }) {
    // db
    const apiDB = import.meta.env.DB_HOST

    const [movies, setMovies] = useState()

    return (
        <DefaultContext.Provider value={{ movies }}>
            {children}
        </DefaultContext.Provider>
    )
}
function useDefaultContext() {
    const context = useContext(DefaultContext)
    return context;
}

export { contextProvider, useDefaultContext }