import { Link } from "react-router-dom";
import Review from "../components/Review";

export default function MovieDetail() {
    return (
        <div className="container">
            <div className="mb-5">

            <h1>blablablatitolo</h1>
            <p>abstract stuff</p>
            <Link to={'/'} className="btn btn-primary">Go back</Link>
            </div>
            <Review/>
        </div>
    )
}