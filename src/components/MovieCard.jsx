import { Link } from "react-router-dom";

export default function MovieCard({ prop }) {
  const { id, title, abstract, image } = prop;
  return (
    <div className="card">
      <img src={image} alt={title} className="rounded-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <Link to={`/movies/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
}
