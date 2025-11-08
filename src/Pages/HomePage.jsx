import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDefaultContext } from "../contexts/DefaultContext";

export default function HomePage() {
  const { setIsLoading } = useDefaultContext();

  const apiDB = "http://localhost:3000/api/movies/";
  const [movies, setMovies] = useState([]); // array dell'index dei film
  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get(apiDB)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(fetchMovies, []);

  const renderMovie = () => {
    return movies.map((film) => {
      return (
        <div className="col gap-3 mb-3" key={film.id}>
          <MovieCard prop={film} />
        </div>
      );
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="display-1 mt-4">Movies</h1>
        <h1 className="fw-light mb-4">Homepage</h1>
        <div className="row row-cols-3 mt-3">{renderMovie()}</div>
      </div>
    </>
  );
}
