import { Link } from "react-router-dom";

export default function MovieCardDetails({ prop }) {
  const { title, director, abstract, image } = prop;
  return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt={title} className="w-75" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{abstract}</p>
              <p className="card-text">
                <small className="text-body-secondary">Directed by </small>
                {director}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"} className="btn btn-primary alin-content-end">
        Go back
      </Link>
    </>
  );
}
