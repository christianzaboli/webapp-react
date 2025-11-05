import StarRating from "./microComponents/StarRating";
export default function Review({ prop }) {
  const { name, vote, text } = prop;
  return (
    <div className="card">
      <div className="card-body row align-items-center">
        <div className="col">
          <p className="h4">
            {name}
            <em className="text-body-secondary fw-light"> says:</em>
          </p>
          <p>{text}</p>
        </div>
        <div className="col">
          <StarRating rating={vote} />
        </div>
      </div>
    </div>
  );
}
