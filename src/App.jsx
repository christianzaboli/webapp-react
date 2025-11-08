import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

//import provider
import { DefaultProvider } from "./contexts/DefaultContext";

//import layout
import DefaultLayout from "./layout/DefaultLayout";

//import pagine
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import AddMovies from "./Pages/AddMovies";

function App() {
  return (
    <DefaultProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/movies/add" element={<AddMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DefaultProvider>
  );
}

export default App;
