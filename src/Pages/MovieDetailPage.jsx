import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Review from "../components/Review";
import MovieCardDetails from "../components/MovieCardDetails";
import ReviewForm from "../components/microComponents/ReviewForm";
export default function MovieDetail() {
  const apiDB = "http://localhost:3000/api/movies/";
  const { id } = useParams();
  const [movieDetailed, setMovieDetailed] = useState([]); // array dell'index dei film
  const fetchDetails = () => {
    axios
      .get(`${apiDB}${id}`)
      .then((res) => {
        setMovieDetailed(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchDetails, []);

  // content
  const renderMovie = () => {
    return <MovieCardDetails prop={movieDetailed} />;
  };

  // reviews
  const renderReviews = () => {
    return movieDetailed.review?.map((rev) => {
      return (
        <div className="col mb-4" key={rev.id}>
          <Review prop={rev} />
        </div>
      );
    });
  };

  // RENDERING PAGINA
  return (
    <div className="container">
      <div className="mb-5">{renderMovie()}</div>
      {renderReviews()}
      <p>Aggiungi la tua review</p>
      <ReviewForm idProp={id} reRender={fetchDetails} />
      <Link to={"/"} className="btn btn-secondary ms-5">
        Go back
      </Link>
    </div>
  );
}
