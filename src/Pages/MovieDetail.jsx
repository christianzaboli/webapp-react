import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDefaultContext } from "../context/DefaultContext";
import Review from "../components/Review";
import MovieCardDetails from "../components/MovieCardDetails";

export default function MovieDetail() {
  const { apiDB } = useDefaultContext();
  const { id } = useParams();
  const [movieDetailed, setMovieDetailed] = useState([]); // array dell'index dei film
  const fetchDetails = () => {
    axios
      .get(`${apiDB}movies/${id}`)
      .then((res) => {
        setMovieDetailed(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchDetails, []);

  const renderMovie = () => {
    return <MovieCardDetails prop={movieDetailed} />;
  };

  const renderReviews = () => {
    return movieDetailed.review?.map((rev) => {
      return (
        <div className="col mb-4" key={rev.id}>
          <Review prop={rev} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="mb-5">{renderMovie()}</div>
      {renderReviews()}
    </div>
  );
}
