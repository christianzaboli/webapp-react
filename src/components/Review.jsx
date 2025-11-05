import StarRating from "./microComponents/StarRating";
export default function Review({ prop }) {
  const { name, vote, text } = prop;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <div className="card-text">
          <StarRating rating={vote} />
        </div>
      </div>
    </div>
  );
}
