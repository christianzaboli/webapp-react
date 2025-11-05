import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/DefaultContext";
import "bootstrap/dist/css/bootstrap.css";

import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
