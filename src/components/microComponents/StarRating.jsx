export default function StarRating(props) {
  const { rating } = props;

  const totalRating = 5;
  const ratingFixed = Math.ceil(rating / 2);

  return (
    <div>
      <p>
        <strong>Rating: </strong>
        <span className="text-warning">
          {[...Array(totalRating)].map((x, index) => (
            <span key={index}>
              {index < ratingFixed ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}
