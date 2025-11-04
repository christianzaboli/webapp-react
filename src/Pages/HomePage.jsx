import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDefaultContext } from "../context/DefaultContext";

export default function HomePage() {
  const { apiDB } = useDefaultContext();
  const [movies, setMovies] = useState([]); // array dell'index dei film
  const fetchMovies = () => {
    axios
      .get(apiDB + "movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchMovies, []);

  const renderMovie = () => {
    return movies.map((film) => {
      return (
        <div className="col gap-3" key={film.id}>
          <MovieCard prop={film} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="text-center fw-light">List of films</h1>
      <div className="row row-cols-3 mt-3">{renderMovie()}</div>
    </div>
  );
}
