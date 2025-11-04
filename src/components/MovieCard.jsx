import { Link } from "react-router-dom";

export default function MovieCard({ prop }) {
  const { id, title, director, abstract, image } = prop;
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
