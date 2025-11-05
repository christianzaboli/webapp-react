export default function MovieCardDetails({ prop }) {
  const { title, director, abstract, image, average_vote } = prop;
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
              <p className="card-text lead">{abstract}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <em>Directed by</em>{" "}
                </small>
                {director}
              </p>
              <p>
                Average rating:{" "}
                <span className="fw-bold">{average_vote}/5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-5"></div>
    </>
  );
}
